/* Read-only public collection. This file has no editor or account connection. */
(() => {
  "use strict";

  const SCHEMA = "evo-gallery-public-v1";
  const ART_PATH = /^assets\/[a-f0-9]{64}\.webp$/;
  const CARD_KEY = /^[a-f0-9]{32}$/;
  const TEXT_CONTROLS = /[\u0000-\u001f\u007f-\u009f\u202a-\u202e\u2066-\u2069]/u;
  const MAX_BYTES = 2 * 1024 * 1024;

  function exactKeys(value, keys) {
    return value !== null && typeof value === "object" && !Array.isArray(value) &&
      Object.keys(value).length === keys.length && keys.every((key) => Object.hasOwn(value, key));
  }

  function validText(value, maxLength) {
    return typeof value === "string" && value.length > 0 && value.length <= maxLength &&
      value.trim() === value && !TEXT_CONTROLS.test(value);
  }

  function validItems(items, kind) {
    if (!Array.isArray(items) || items.length > 500) return false;
    const ids = new Set();
    return items.every((item) => {
      if (!exactKeys(item, ["id", "name", "art"]) || !validText(item.id, 100) ||
          !validText(item.name, 120) || typeof item.art !== "string" || !ART_PATH.test(item.art) ||
          (kind === "curios" && !/^curio_[0-9]{2}$/.test(item.id)) ||
          (kind === "squishies" && !/^[a-z0-9_]+$/.test(item.id)) || ids.has(item.id)) return false;
      ids.add(item.id);
      return true;
    });
  }

  // Fail closed: an unknown field, unsafe path, or invalid card hides the whole payload.
  // The publishing step separately verifies canonical names and strips private data.
  function validateCollection(value) {
    if (!exactKeys(value, ["schema", "cards"]) || value.schema !== SCHEMA ||
        !Array.isArray(value.cards) || value.cards.length > 2000) return false;
    const keys = new Set();
    return value.cards.every((card) => {
      if (!exactKeys(card, ["key", "creatureName", "stage", "art", "curios", "squishies"]) ||
          typeof card.key !== "string" || !CARD_KEY.test(card.key) || keys.has(card.key) ||
          !validText(card.creatureName, 120) || !Number.isInteger(card.stage) || card.stage < 0 || card.stage > 3 ||
          typeof card.art !== "string" || !ART_PATH.test(card.art) ||
          !validItems(card.curios, "curios") || !validItems(card.squishies, "squishies")) return false;
      keys.add(card.key);
      return true;
    });
  }

  const collection = document.getElementById("collection");
  const grid = document.getElementById("creature-grid");
  const count = document.getElementById("collection-count");
  const status = document.getElementById("collection-status");
  const empty = document.getElementById("empty-state");
  const dialog = document.getElementById("trophy-room");
  const closeButton = document.getElementById("close-room");
  const artDialog = document.getElementById("art-viewer");
  const closeArtButton = document.getElementById("close-art");
  let opener = null;
  let artOpener = null;
  const PAGE_SIZE = 6;

  function element(tag, className, text) {
    const node = document.createElement(tag);
    if (className) node.className = className;
    if (text !== undefined) node.textContent = text;
    return node;
  }

  function artwork(path, name, lazy) {
    const img = element("img");
    img.alt = name;
    img.decoding = "async";
    img.loading = lazy ? "lazy" : "eager";
    img.referrerPolicy = "no-referrer";
    img.addEventListener("error", () => {
      const fallback = element("span", "art-unavailable", "Artwork unavailable");
      fallback.setAttribute("role", "img");
      fallback.setAttribute("aria-label", name ? `${name}: artwork unavailable` : "Artwork unavailable");
      img.replaceWith(fallback);
    }, { once: true });
    // Only prevalidated, content-addressed, same-directory image paths reach here.
    img.src = path;
    return img;
  }

  function openArt(path, name, button) {
    if (artDialog.open) return;
    artOpener = button;
    document.getElementById("art-title").textContent = name;
    document.getElementById("enlarged-art").replaceChildren(artwork(path, name, false));
    artDialog.showModal();
    closeArtButton.focus({ preventScroll: true });
  }

  function artButton(path, name, className) {
    const button = element("button", className);
    button.type = "button";
    button.setAttribute("aria-label", `Enlarge ${name}`);
    button.title = name;
    button.append(artwork(path, "", false));
    button.addEventListener("click", () => openArt(path, name, button));
    return button;
  }

  function treasures(items, kind, label, page = 0) {
    const target = document.getElementById(`${kind}-content`);
    const footer = document.getElementById(`${kind}-pager`);
    const pages = Math.max(1, Math.ceil(items.length / PAGE_SIZE));
    page = Math.max(0, Math.min(pages - 1, page));
    target.replaceChildren();
    footer.replaceChildren();
    document.getElementById(`${kind}-count`).textContent = `${items.length} collected`;
    const list = element("ul", "treasure-list");
    list.setAttribute("aria-label", label);
    if (items.length === 0) {
      target.append(element("p", "treasure-empty sr-only", `No ${label} in this collection yet.`));
    }
    for (const item of items.slice(page * PAGE_SIZE, (page + 1) * PAGE_SIZE)) {
      const treasure = element("li", "treasure");
      treasure.append(artButton(item.art, item.name, "treasure-art"), element("span", "treasure-name", item.name));
      list.append(treasure);
    }
    target.append(list);
    if (pages > 1) {
      const nav = element("nav", "shelf-pager");
      nav.setAttribute("aria-label", `${label} pages`);
      const previous = element("button", "", "‹");
      const next = element("button", "", "›");
      previous.type = next.type = "button";
      previous.setAttribute("aria-label", `Previous ${label} page`);
      next.setAttribute("aria-label", `Next ${label} page`);
      previous.disabled = page === 0;
      next.disabled = page === pages - 1;
      const pageLabel = element("span", "", `${page + 1} / ${pages}`);
      pageLabel.setAttribute("aria-live", "polite");
      function changePage(delta) {
        treasures(items, kind, label, page + delta);
        // Keep keyboard focus on the surviving direction, or its enabled counterpart.
        const buttons = [...footer.querySelectorAll("button")];
        const preferred = buttons[delta > 0 ? 1 : 0];
        (preferred && !preferred.disabled ? preferred : buttons.find((b) => !b.disabled))?.focus({ preventScroll: true });
      }
      previous.addEventListener("click", () => changePage(-1));
      next.addEventListener("click", () => changePage(1));
      nav.append(previous, pageLabel, next);
      footer.append(nav);
    }
  }

  function openRoom(card, button) {
    // One fixed selection. There is no timer, auto-advance, or adjacent-creature navigation.
    if (dialog.open) return;
    opener = button;
    document.getElementById("room-title").textContent = card.creatureName;
    document.getElementById("room-stage").textContent = `Stage ${card.stage}`;
    document.getElementById("room-portrait").replaceChildren(artButton(card.art, card.creatureName, "creature-art"));
    treasures(card.curios, "curios", "Curios");
    treasures(card.squishies, "squishies", "Squishies");
    dialog.showModal();
    dialog.scrollTop = 0;
    document.body.classList.add("room-open");
    closeButton.focus({ preventScroll: true });
  }

  function render(cards) {
    grid.replaceChildren();
    status.hidden = true;
    count.textContent = `${cards.length} ${cards.length === 1 ? "creature" : "creatures"}`;
    count.hidden = cards.length === 0;
    empty.hidden = cards.length !== 0;
    grid.hidden = cards.length === 0;
    const fragment = document.createDocumentFragment();
    cards.forEach((card) => {
      const listItem = element("li", "creature-card");
      const button = element("button", "creature-button");
      button.type = "button";
      button.setAttribute("aria-haspopup", "dialog");
      button.setAttribute("aria-controls", "trophy-room");
      button.setAttribute("aria-label", `${card.creatureName}, stage ${card.stage}. Open trophy room`);
      const portrait = element("div", "portrait");
      portrait.append(element("span", "stage", `Stage ${card.stage}`), artwork(card.art, "", true));
      const info = element("div", "card-text");
      info.append(element("span", "card-name", card.creatureName));
      const cta = element("span", "card-link");
      cta.append(element("span", "", "Explore trophy room"));
      const arrow = element("span", "arrow", "↗");
      arrow.setAttribute("aria-hidden", "true");
      cta.append(arrow);
      info.append(cta);
      button.append(portrait, info);
      button.addEventListener("click", () => openRoom(card, button));
      listItem.append(button);
      fragment.append(listItem);
    });
    grid.append(fragment);
    collection.setAttribute("aria-busy", "false");
  }

  closeButton.addEventListener("click", () => dialog.close());
  closeArtButton.addEventListener("click", () => artDialog.close());
  artDialog.addEventListener("close", () => {
    const previous = artOpener;
    artOpener = null;
    document.getElementById("enlarged-art").replaceChildren();
    if (previous && previous.isConnected) previous.focus({ preventScroll: true });
  });
  // Keep Tab inside the active modal even when it has only one control.
  for (const modal of [dialog, artDialog]) modal.addEventListener("keydown", (event) => {
    if (event.key !== "Tab") return;
    const buttons = [...modal.querySelectorAll("button:not(:disabled)")];
    const first = buttons[0], last = buttons[buttons.length - 1];
    if (!first) return;
    if (event.shiftKey && document.activeElement === first) {
      event.preventDefault(); last.focus();
    } else if (!event.shiftKey && document.activeElement === last) {
      event.preventDefault(); first.focus();
    }
  });
  // Native showModal provides focus containment, inert background, and Escape dismissal.
  dialog.addEventListener("close", () => {
    document.body.classList.remove("room-open");
    const previous = opener;
    opener = null;
    if (previous && previous.isConnected) previous.focus({ preventScroll: true });
  });

  async function load() {
    try {
      const url = new URL("collection.json", window.location.href);
      if (url.origin !== window.location.origin) throw new Error("Invalid origin");
      const response = await fetch(url.href, {
        method: "GET",
        mode: "same-origin",
        credentials: "omit",
        redirect: "error",
        cache: "no-store",
        referrerPolicy: "no-referrer"
      });
      if (!response.ok) throw new Error("Unavailable collection");
      const declaredSize = response.headers.get("content-length");
      if (declaredSize && Number(declaredSize) > MAX_BYTES) throw new Error("Oversized collection");
      const raw = await response.text();
      if (new TextEncoder().encode(raw).length > MAX_BYTES) throw new Error("Oversized collection");
      const payload = JSON.parse(raw);
      if (!validateCollection(payload)) throw new Error("Invalid collection");
      render(payload.cards);
    } catch {
      // Do not echo a malformed payload, private fields, or technical errors into the page.
      grid.replaceChildren();
      grid.hidden = true;
      empty.hidden = true;
      count.hidden = true;
      status.textContent = "The collection couldn’t be opened. Please try again a little later.";
      status.classList.add("is-error");
      status.hidden = false;
      collection.setAttribute("aria-busy", "false");
    }
  }

  load();
})();
