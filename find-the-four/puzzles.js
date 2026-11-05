/* 45 hand-authored daily classroom word boards: original 20 plus 25 additions. */
(function(root){
'use strict';
const puzzles=[
  {
    "id": "minecraft-mischief",
    "title": "The Mischief Mix",
    "difficulty": "Challenge",
    "groups": [
      {
        "label": "Minecraft mobs",
        "words": [
          "CREEPER",
          "ENDERMAN",
          "ZOMBIE",
          "SKELETON"
        ],
        "hint": "Four of these can move around in the same blocky world.",
        "easierHint": "Look for four Minecraft creatures, often called mobs.",
        "explanation": "Creepers, Endermen, zombies and skeletons are all Minecraft mobs. They do not all behave in the same way: Endermen are normally neutral until provoked.",
        "sources": [
          "https://www.minecraft.net/en-us/article/minecraft-mobs"
        ]
      },
      {
        "label": "Beginnings meaning NOT",
        "words": [
          "UNFAIR",
          "IMPOSSIBLE",
          "INCORRECT",
          "DISHONEST"
        ],
        "hint": "Four different beginnings make the words negative.",
        "easierHint": "Think: not fair, not possible, not correct and not honest.",
        "explanation": "Here un-, im-, in- and dis- give the meaning NOT: unfair, impossible, incorrect and dishonest. The beginnings look different but do a similar job.",
        "sources": [
          "https://assets.publishing.service.gov.uk/government/uploads/system/uploads/attachment_data/file/239784/English_Appendix_1_-_Spelling.pdf"
        ]
      },
      {
        "label": "Put BALL after these",
        "words": [
          "FOOT",
          "BASKET",
          "SNOW",
          "MEAT"
        ],
        "hint": "Give four tiles the same ending. One answer belongs on a dinner plate!",
        "easierHint": "FOOT + BALL makes FOOTBALL. Find three more words that work with BALL.",
        "explanation": "Football, basketball, snowball and meatball all end in BALL. A meatball is a very different sort of ball!"
      },
      {
        "label": "Beginnings meaning SMALL",
        "words": [
          "MINIBUS",
          "MINIBEAST",
          "MICROCHIP",
          "MICROSCOPE"
        ],
        "hint": "Two different beginnings share a size-related meaning.",
        "easierHint": "MINI- and MICRO- both point to something small.",
        "explanation": "Mini- means small, as in minibus and minibeast. Micro- also means small: a microchip is tiny, and a microscope helps us look at very small things.",
        "sources": [
          "https://www.etymonline.com/word/mini-",
          "https://pressbooks.uwf.edu/medicalterminology/chapter/prefixes-and-suffixes/"
        ]
      }
    ]
  },
  {
    "id": "nw-word-detectives",
    "title": "The Sneaky Signal",
    "difficulty": "Challenge",
    "groups": [
      {
        "label": "NW bosses",
        "words": [
          "THE PUZZLER",
          "RIDDLEBOO",
          "LORD LAVA",
          "LADY SCORN"
        ],
        "hint": "Four familiar opponents have escaped from another game.",
        "easierHint": "Look for four boss names from NW.",
        "explanation": "The Puzzler, RiddleBoo, Lord Lava and Lady Scorn are NW bosses.",
        "sources": [
          "https://github.com/jlclass2026/jlclass2026.github.io/blob/main/scorex/index.html"
        ]
      },
      {
        "label": "Beginnings meaning ONE",
        "words": [
          "UNICYCLE",
          "UNICORN",
          "MONORAIL",
          "MONOCLE"
        ],
        "hint": "Two different beginnings hide the same number.",
        "easierHint": "Count the wheel, horn, rail or eyeglass lens: ONE.",
        "explanation": "Latin uni- and Greek mono- both mean ONE. A unicycle has one wheel, a unicorn one horn, a monorail uses one rail, and a monocle is an eyeglass for one eye.",
        "sources": [
          "https://www.etymonline.com/word/mono-",
          "https://www.etymonline.com/word/monocle",
          "https://www.etymonline.com/word/uni-"
        ]
      },
      {
        "label": "LESS means WITHOUT",
        "words": [
          "FEARLESS",
          "WINGLESS",
          "TOOTHLESS",
          "SLEEVELESS"
        ],
        "hint": "Ask what is missing from each of four words.",
        "easierHint": "One ending means WITHOUT: without fear, wings, teeth or sleeves.",
        "explanation": "The suffix -less means WITHOUT. Fearless is without fear, wingless without wings, toothless without teeth, and sleeveless without sleeves."
      },
      {
        "label": "Put DAY before these",
        "words": [
          "LIGHT",
          "DREAM",
          "BREAK",
          "TIME"
        ],
        "hint": "The same short word can go before four tiles.",
        "easierHint": "DAY + LIGHT makes DAYLIGHT. Find three more words that work with DAY.",
        "explanation": "Daylight, daydream, daybreak and daytime all begin with DAY. Daybreak is the beginning of daylight in the morning."
      }
    ]
  },
  {
    "id": "furkin-word-origins",
    "title": "The Secret Word Lab",
    "difficulty": "Challenge",
    "groups": [
      {
        "label": "Furkin creatures",
        "words": [
          "BRAMBLEBOLT",
          "TUMBLETUFT",
          "ROSYWHISK",
          "EMBERPOUNCE"
        ],
        "hint": "Four familiar names belong to the same creature family.",
        "easierHint": "Look for four Furkin creature names.",
        "explanation": "Bramblebolt, Tumbletuft, Rosywhisk and Emberpounce belong to the Furkin family."
      },
      {
        "label": "Word roots meaning WATER",
        "words": [
          "AQUARIUM",
          "AQUATIC",
          "HYDRATE",
          "HYDROPOWER"
        ],
        "hint": "Two different word roots share one watery meaning.",
        "easierHint": "AQUA and HYDR/HYDRO are roots connected with WATER.",
        "explanation": "Latin aqua and Greek hydr-/hydro- mean WATER. An aquarium holds water, aquatic means relating to water, hydrate means supply with water, and hydropower uses moving water to make power.",
        "sources": [
          "https://www.etymonline.com/word/aquarium",
          "https://www.etymonline.com/word/aquatic",
          "https://www.etymonline.com/word/hydrate",
          "https://www.etymonline.com/word/hydropower"
        ]
      },
      {
        "label": "A word part meaning SOUND",
        "words": [
          "TELEPHONE",
          "MICROPHONE",
          "XYLOPHONE",
          "MEGAPHONE"
        ],
        "hint": "Look for a shared word part, then think about what all four do.",
        "easierHint": "The PHONE part comes from a word meaning SOUND or VOICE.",
        "explanation": "The shared -phone part comes from Greek for SOUND or VOICE. A telephone carries sound, a microphone picks it up, a xylophone makes musical sounds, and a megaphone makes a voice louder.",
        "sources": [
          "https://www.etymonline.com/word/-phone"
        ]
      },
      {
        "label": "Put RAIN before these",
        "words": [
          "BOW",
          "COAT",
          "CLOUD",
          "FOREST"
        ],
        "hint": "The same weather word can go before four tiles.",
        "easierHint": "RAIN + BOW makes RAINBOW. Find three more words that work with RAIN.",
        "explanation": "Rainbow, raincoat, raincloud and rainforest all begin with RAIN. Four very different things share the same beginning."
      }
    ]
  },
  {
    "id": "warm-up",
    "title": "Warm-up",
    "difficulty": "Warm-up",
    "groups": [
      {
        "label": "Farm animals",
        "words": [
          "COW",
          "PIG",
          "GOAT",
          "SHEEP"
        ],
        "hint": "Think about where you might meet some of these.",
        "easierHint": "Find four animals you might see on a farm."
      },
      {
        "label": "Shapes",
        "words": [
          "CIRCLE",
          "SQUARE",
          "TRIANGLE",
          "RECTANGLE"
        ],
        "hint": "Some of these could be drawn with a pencil.",
        "easierHint": "Look for four names of shapes."
      },
      {
        "label": "Materials",
        "words": [
          "PAPER",
          "GLASS",
          "METAL",
          "PLASTIC"
        ],
        "hint": "Think about what everyday objects are made from.",
        "easierHint": "A window might be made from one; a bottle might be made from another."
      },
      {
        "label": "Two O letters together",
        "words": [
          "BOOK",
          "MOON",
          "BOOT",
          "SPOON"
        ],
        "hint": "One connection is in the letters, not the meanings.",
        "easierHint": "Look for OO in four words. The letters do not always make the same sound."
      }
    ]
  },
  {
    "id": "sneaky-shuffle",
    "title": "Sneaky shuffle",
    "difficulty": "Warm-up",
    "groups": [
      {
        "label": "Worn on feet",
        "words": [
          "SOCKS",
          "SHOES",
          "BOOTS",
          "SLIPPERS"
        ],
        "hint": "Some of these belong on the same part of your body.",
        "easierHint": "Find four things you wear on your feet."
      },
      {
        "label": "Sea animals",
        "words": [
          "SHARK",
          "WHALE",
          "OCTOPUS",
          "SEAHORSE"
        ],
        "hint": "Four creatures share a watery home.",
        "easierHint": "Find four animals that live in the sea."
      },
      {
        "label": "Things with wheels",
        "words": [
          "BICYCLE",
          "SCOOTER",
          "SKATEBOARD",
          "WHEELBARROW"
        ],
        "hint": "Think about how some of these move.",
        "easierHint": "Three can carry you; one can carry garden things. All have wheels."
      },
      {
        "label": "Words beginning with SUN",
        "words": [
          "SUNRISE",
          "SUNSHINE",
          "SUNFLOWER",
          "SUNBEAM"
        ],
        "hint": "Look at the beginning of each word.",
        "easierHint": "Four words begin with the same three letters: SUN."
      }
    ]
  },
  {
    "id": "wobble-test",
    "title": "The wobble test",
    "difficulty": "Stretch",
    "groups": [
      {
        "label": "Fruits",
        "words": [
          "APPLE",
          "BANANA",
          "GRAPE",
          "PEAR"
        ],
        "hint": "Look for a naturally sweet group.",
        "easierHint": "Find four fruits you might put in a fruit bowl."
      },
      {
        "label": "Musical instruments",
        "words": [
          "DRUM",
          "GUITAR",
          "PIANO",
          "TRUMPET"
        ],
        "hint": "This group could make quite a noise together.",
        "easierHint": "Find four things people play to make music."
      },
      {
        "label": "Animal homes",
        "words": [
          "NEST",
          "HIVE",
          "DEN",
          "BURROW"
        ],
        "hint": "Think about somewhere safe to live.",
        "easierHint": "Birds, bees, foxes and rabbits could help you find this group."
      },
      {
        "label": "Put BALL after these",
        "words": [
          "FOOT",
          "BASKET",
          "SNOW",
          "MEAT"
        ],
        "hint": "Try adding the same word to the end of four tiles.",
        "easierHint": "FOOT + BALL makes FOOTBALL. Find three more words that work with BALL."
      }
    ]
  },
  {
    "id": "nearly-tricky",
    "title": "The nearly-tricky one",
    "difficulty": "Stretch",
    "groups": [
      {
        "label": "Usually eaten with a spoon",
        "words": [
          "SOUP",
          "PORRIDGE",
          "YOGHURT",
          "CUSTARD"
        ],
        "hint": "Think about which piece of cutlery you would choose.",
        "easierHint": "A fork would be awkward. Find four foods you would usually eat with a spoon."
      },
      {
        "label": "Baby animals",
        "words": [
          "CALF",
          "FOAL",
          "CHICK",
          "LAMB"
        ],
        "hint": "This group has some growing up to do.",
        "easierHint": "Find the names for a young cow, horse, chicken and sheep."
      },
      {
        "label": "Units for measuring",
        "words": [
          "METRE",
          "LITRE",
          "GRAM",
          "DEGREE"
        ],
        "hint": "These help answer questions such as “How much?” and “How long?”",
        "easierHint": "Think about length, liquid, mass and temperature."
      },
      {
        "label": "Put RAIN before these",
        "words": [
          "BOW",
          "COAT",
          "CLOUD",
          "FOREST"
        ],
        "hint": "Try adding the same weather word to the beginning of four tiles.",
        "easierHint": "RAIN + BOW makes RAINBOW. Find three more words that work with RAIN."
      }
    ]
  },
  {
    "id": "brain-boggler",
    "title": "The friendly brain-boggler",
    "difficulty": "Challenge",
    "groups": [
      {
        "label": "Usually found in pairs",
        "words": [
          "SOCKS",
          "SHOES",
          "GLOVES",
          "EYES"
        ],
        "hint": "Try counting how many you would usually expect.",
        "easierHint": "You normally have two of each, with a left and a right."
      },
      {
        "label": "Animal sounds",
        "words": [
          "BARK",
          "MOO",
          "HISS",
          "QUACK"
        ],
        "hint": "Imagine hearing these without seeing who made them.",
        "easierHint": "Think of a dog, cow, snake and duck."
      },
      {
        "label": "Colours that are also foods",
        "words": [
          "ORANGE",
          "PEACH",
          "LIME",
          "OLIVE"
        ],
        "hint": "These names could belong in two places: a kitchen and a paint box.",
        "easierHint": "Each word names a food and a colour."
      },
      {
        "label": "Put CAKE after these",
        "words": [
          "CUP",
          "PAN",
          "CHEESE",
          "FISH"
        ],
        "hint": "Try giving four words the same ending. They will not all taste sweet!",
        "easierHint": "CUP + CAKE makes CUPCAKE. Find three more words that work with CAKE."
      }
    ]
  },
  {
    "id": "aquatic-odd-squad",
    "title": "The Ocean Odd Squad",
    "difficulty": "Stretch",
    "groups": [
      {
        "label": "Jellies: soft-bodied stingers",
        "words": [
          "MOON JELLY",
          "BOX JELLY",
          "SEA NETTLE",
          "FRIED EGG JELLY"
        ],
        "hint": "Four have soft, jelly-like bodies and stinging cells.",
        "easierHint": "Find four kinds of jellyfish. One sounds like breakfast!",
        "explanation": "These are four kinds of jellyfish, not fish. They have soft bodies without bones and use stinging cells to catch food. Fried egg jelly really is an animal's name!",
        "sources": [
          "https://www.montereybayaquarium.org/animals-the-ocean/animals-a-to-z/moon-jelly",
          "https://www.nhm.ac.uk/discover/what-is-a-jellyfish.html",
          "https://storage.montereybayaquarium.org/storage/pressroom/presskit/pdf/03-jellies-press_kit.pdf"
        ]
      },
      {
        "label": "Crustaceans: lobster relatives",
        "words": [
          "CRAB",
          "LOBSTER",
          "PRAWN",
          "KRILL"
        ],
        "hint": "Four wear their skeleton on the outside.",
        "easierHint": "Look for a crab, a lobster and two smaller relatives with jointed legs.",
        "explanation": "Crabs, lobsters, prawns and krill are crustaceans. They have jointed legs and an outer skeleton called an exoskeleton. They shed that outer covering as they grow.",
        "sources": [
          "https://www.nhm.ac.uk/discover/mantis-shrimps.html"
        ]
      },
      {
        "label": "Marine mammal hunters",
        "words": [
          "BOTTLENOSE DOLPHIN",
          "ORCA",
          "GREY SEAL",
          "SEA OTTER"
        ],
        "hint": "These hunters breathe air with lungs and feed their babies milk.",
        "easierHint": "Find four marine mammals, including a dolphin and two furry hunters.",
        "explanation": "These are marine mammals that hunt other animals. They breathe air with lungs and feed their young milk. Some jellies, crustaceans and fish hunt too, so MAMMAL is the important extra clue.",
        "sources": [
          "https://www.fisheries.noaa.gov/species/common-bottlenose-dolphin",
          "https://www.fisheries.noaa.gov/species/killer-whale",
          "https://www.fisheries.noaa.gov/species/gray-seal",
          "https://www.montereybayaquarium.org/animals-the-ocean/animals-a-to-z/sea-otter"
        ]
      },
      {
        "label": "Bony fish",
        "words": [
          "CLOWNFISH",
          "PARROTFISH",
          "ANGELFISH",
          "BUTTERFLYFISH"
        ],
        "hint": "Find four animals with backbones, fins and gills.",
        "easierHint": "These four are fish, not jellies or mammals. Their names end in FISH.",
        "explanation": "Clownfish, parrotfish, angelfish and butterflyfish are bony fish. They have internal skeletons with backbones, fins for swimming and gills for taking oxygen from water.",
        "sources": [
          "https://www.aquariumofpacific.org/exhibits/coralreefs/coral_animals",
          "https://www.aquariumofpacific.org/onlinelearningcenter/category/bony_fishes/P20"
        ]
      }
    ]
  },
  {
    "id": "scaleclade-shuffle",
    "title": "The Snap-Together Puzzle",
    "difficulty": "Challenge",
    "groups": [
      {
        "label": "Scaleclade creatures",
        "words": [
          "IRONCREST",
          "CINDERTAIL",
          "RIFTBACK",
          "THORNWHIRL"
        ],
        "hint": "Four familiar names share a creature family.",
        "easierHint": "Find four Scaleclade names from NW.",
        "explanation": "Ironcrest, Cindertail, Riftback and Thornwhirl are Scaleclade creatures."
      },
      {
        "label": "TWO is the clue",
        "words": [
          "BICYCLE",
          "BINOCULARS",
          "DUET",
          "TWINS"
        ],
        "hint": "A number connects four very different things.",
        "easierHint": "Think of two wheels, two eyepieces, two performers or two babies.",
        "explanation": "A bicycle has two wheels, binoculars two eyepieces, a duet two performers, and twins are two babies from one pregnancy. Bi- in bicycle and binoculars means two."
      },
      {
        "label": "Teeth, but no mouths",
        "words": [
          "COMB",
          "SAW",
          "ZIP",
          "GEAR"
        ],
        "hint": "Four objects borrow the name of a body part.",
        "easierHint": "They have TEETH, but none has a mouth.",
        "explanation": "A comb, saw, zip and gear have parts called teeth. These teeth untangle, cut, fasten or fit together."
      },
      {
        "label": "Put TOOTH before these",
        "words": [
          "BRUSH",
          "PASTE",
          "ACHE",
          "PICK"
        ],
        "hint": "One body-part word fits before four tiles.",
        "easierHint": "TOOTH + BRUSH makes TOOTHBRUSH. Try three more.",
        "explanation": "Toothbrush, toothpaste, toothache and toothpick all begin with TOOTH. Not all four are objects!"
      }
    ]
  },
  {
    "id": "tideborn-trick",
    "title": "The Mixed-Up Message",
    "difficulty": "Challenge",
    "groups": [
      {
        "label": "Tideborn creatures",
        "words": [
          "MOXIBLU",
          "TUMBERELL",
          "VELUNOX",
          "QUILLAMAR"
        ],
        "hint": "Four names belong to the same creature family.",
        "easierHint": "Find four Tideborn names from NW.",
        "explanation": "Moxiblu, Tumberell, Velunox and Quillamar belong to the Tideborn family."
      },
      {
        "label": "Beginnings meaning UNDER",
        "words": [
          "SUBMARINE",
          "SUBWAY",
          "UNDERGROUND",
          "UNDERWATER"
        ],
        "hint": "Different word beginnings point in the same direction.",
        "easierHint": "SUB- and UNDER- can both mean beneath something.",
        "explanation": "Here sub- means UNDER, as in submarine and subway. Underground and underwater use the English beginning under-. The spelling changes, but the idea is similar.",
        "sources": [
          "https://www.thenational.academy/pupils/lessons/spelling-words-with-the-prefixes-de-re-sub-super-inter-anti-and-auto/video"
        ]
      },
      {
        "label": "You use a KEY with these",
        "words": [
          "MAP",
          "PIANO",
          "LOCK",
          "KEYBOARD"
        ],
        "hint": "One little word helps you use four very different things.",
        "easierHint": "A map has a KEY. So do some musical and typing objects.",
        "explanation": "A map key explains symbols; piano and keyboard keys are pressed; a lock can be opened with a key. KEY has several useful meanings."
      },
      {
        "label": "Put FLY after these",
        "words": [
          "BUTTER",
          "DRAGON",
          "FIRE",
          "HOUSE"
        ],
        "hint": "Add the same ending to make four insect names.",
        "easierHint": "BUTTER + FLY makes BUTTERFLY. Find three more.",
        "explanation": "Butterfly, dragonfly, firefly and housefly are insects. A dragonfly is not a tiny dragon!"
      }
    ]
  },
  {
    "id": "twiggynook-word-trail",
    "title": "The Hidden Trail",
    "difficulty": "Challenge",
    "groups": [
      {
        "label": "Twiggynook names",
        "words": [
          "BARKBIBBLE",
          "FROSTWHIRL",
          "SPRUCEJIG",
          "MOSSYBOP"
        ],
        "hint": "Four familiar names come from the same secret place.",
        "easierHint": "Look for four Twiggynooks from the Secret Grove.",
        "explanation": "Barkbibble, Frostwhirl, Sprucejig and Mossybop are Twiggynooks."
      },
      {
        "label": "An old root for WRITING",
        "words": [
          "AUTOGRAPH",
          "PHOTOGRAPH",
          "GRAPHITE",
          "PARAGRAPH"
        ],
        "hint": "A hidden word part connects writing, pictures and pencils.",
        "easierHint": "Look for GRAPH, from an old Greek word meaning write.",
        "explanation": "These words share the Greek writing root GRAPH. An autograph is someone's own writing; a photograph is a picture made with light; graphite is used in pencils; a paragraph is a section of writing.",
        "sources": [
          "https://www.etymonline.com/word/graphite",
          "https://www.etymonline.com/word/autograph",
          "https://www.etymonline.com/word/photograph",
          "https://www.etymonline.com/word/paragraph"
        ]
      },
      {
        "label": "Put STAR before these",
        "words": [
          "FISH",
          "LIGHT",
          "DUST",
          "SHIP"
        ],
        "hint": "A word from the night sky fits before four tiles.",
        "easierHint": "STAR + FISH makes STARFISH. Find three more.",
        "explanation": "Starfish, starlight, stardust and starship begin with STAR. Only some belong in space."
      },
      {
        "label": "Ways to cook",
        "words": [
          "BOIL",
          "BAKE",
          "FRY",
          "STEAM"
        ],
        "hint": "Four words tell a cook what to do.",
        "easierHint": "Look for four cooking actions that use heat.",
        "explanation": "Boil, bake, fry and steam are ways to cook food. They use heat in different ways."
      }
    ]
  },
  {
    "id": "classroom-double-take",
    "title": "The Double Take",
    "difficulty": "Challenge",
    "groups": [
      {
        "label": "Non-living things with FACES",
        "words": [
          "CLOCK",
          "WATCH",
          "DICE",
          "COIN"
        ],
        "hint": "Four objects share the name of a body part.",
        "easierHint": "They have FACES, but they are not people.",
        "explanation": "Clocks and watches have faces showing the time. Dice have flat faces, and a coin has two faces or sides."
      },
      {
        "label": "Things you can TIE",
        "words": [
          "KNOT",
          "BOW",
          "RIBBON",
          "SHOELACE"
        ],
        "hint": "The same action works with four tiles.",
        "easierHint": "You can TIE each one.",
        "explanation": "You can tie a knot, a bow, a ribbon or a shoelace. Some name the thing you tie; others name the shape you make."
      },
      {
        "label": "Four maths operations",
        "words": [
          "ADD",
          "SUBTRACT",
          "MULTIPLY",
          "DIVIDE"
        ],
        "hint": "Four actions change or combine numbers.",
        "easierHint": "Think of plus, minus, times and sharing into groups.",
        "explanation": "Add, subtract, multiply and divide are four operations used in maths."
      },
      {
        "label": "Put ROOM after these",
        "words": [
          "BED",
          "BATH",
          "CLASS",
          "PLAY"
        ],
        "hint": "The same ending makes four places.",
        "easierHint": "BED + ROOM makes BEDROOM. Try three more.",
        "explanation": "Bedroom, bathroom, classroom and playroom all end in ROOM."
      }
    ]
  },
  {
    "id": "space-secret",
    "title": "The Far-Out Mix",
    "difficulty": "Challenge",
    "groups": [
      {
        "label": "Our four rocky planets",
        "words": [
          "MERCURY",
          "VENUS",
          "EARTH",
          "MARS"
        ],
        "hint": "Four neighbours have solid, rocky surfaces.",
        "easierHint": "Find the four planets closest to the Sun.",
        "explanation": "Mercury, Venus, Earth and Mars are the four inner, rocky planets of our Solar System.",
        "sources": [
          "https://science.nasa.gov/exoplanets/terrestrial/"
        ]
      },
      {
        "label": "Add SHIP to the end",
        "words": [
          "SPACE",
          "STAR",
          "FRIEND",
          "OWNER"
        ],
        "hint": "A shared ending makes two vehicles and two quite different ideas.",
        "easierHint": "SPACE + SHIP makes SPACESHIP. Try all four.",
        "explanation": "Spaceship and starship are vehicles. Friendship and ownership are not! All four words end in SHIP."
      },
      {
        "label": "Slow ways to move",
        "words": [
          "CREEP",
          "CRAWL",
          "STROLL",
          "TRUDGE"
        ],
        "hint": "Imagine moving without rushing.",
        "easierHint": "Find four verbs for slow movement.",
        "explanation": "Creep, crawl, stroll and trudge describe ways of moving slowly. Trudging is slow, heavy walking."
      },
      {
        "label": "Things with a TAIL",
        "words": [
          "COMET",
          "KITE",
          "COIN",
          "AEROPLANE"
        ],
        "hint": "A body-part word links four things that are not animals.",
        "easierHint": "Think of a comet's tail, and heads or tails.",
        "explanation": "A comet can grow a tail near the Sun; a kite can have a tail; an aeroplane has a tail; and a coin has a tails side."
      }
    ]
  },
  {
    "id": "sport-sideways",
    "title": "The Offbeat Round",
    "difficulty": "Challenge",
    "groups": [
      {
        "label": "Sports with a dividing net",
        "words": [
          "TENNIS",
          "BADMINTON",
          "VOLLEYBALL",
          "TABLE TENNIS"
        ],
        "hint": "Four sports keep opponents on different sides of something.",
        "easierHint": "A NET separates the two sides.",
        "explanation": "Tennis, badminton, volleyball and table tennis use a net between the opposing sides."
      },
      {
        "label": "Sport words with another meaning",
        "words": [
          "BAT",
          "RACKET",
          "PITCH",
          "MATCH"
        ],
        "hint": "Four sports words can also belong somewhere else.",
        "easierHint": "Think of an animal, a loud noise, a high or low sound, and a fire-lighting stick.",
        "explanation": "A bat can be an animal; a racket can be a loud noise; pitch describes how high or low a sound is; a match can light a fire. All four also have sports meanings."
      },
      {
        "label": "THREE is the clue",
        "words": [
          "TRIANGLE",
          "TRICYCLE",
          "TRAFFIC LIGHTS",
          "TRIPOD"
        ],
        "hint": "A number matters to four very different things.",
        "easierHint": "Count sides, wheels, main colours or legs.",
        "explanation": "A triangle has three sides, a tricycle three wheels, a tripod three legs, and standard road traffic lights use three main colours. Tri- means THREE."
      },
      {
        "label": "Punctuation marks",
        "words": [
          "COMMA",
          "FULL STOP",
          "QUESTION MARK",
          "APOSTROPHE"
        ],
        "hint": "Four help written sentences make sense.",
        "easierHint": "Look for marks used when writing, rather than letters or numbers.",
        "explanation": "A comma, full stop, question mark and apostrophe are punctuation marks."
      }
    ]
  },
  {
    "id": "food-hidden-parts",
    "title": "The Surprising Sort",
    "difficulty": "Challenge",
    "groups": [
      {
        "label": "Fruits in plant science",
        "words": [
          "TOMATO",
          "CUCUMBER",
          "CAPSICUM",
          "PUMPKIN"
        ],
        "hint": "Plant scientists might group these differently from a cook.",
        "easierHint": "These grow from flowers and are fruits, even though we often call them vegetables.",
        "explanation": "Tomato, cucumber, capsicum and pumpkin are botanical fruits. Capsicum is also called sweet pepper. Cooks often treat these as vegetables: a cooking name and a plant-science name can both be useful.",
        "sources": [
          "https://www.kew.org/plants/cucumber",
          "https://www.kew.org/plants/pepper",
          "https://www.kew.org/plants/squash",
          "https://www.kew.org/read-and-watch/vegetable-fruit-seeds-up-close"
        ]
      },
      {
        "label": "Root vegetables",
        "words": [
          "CARROT",
          "RADISH",
          "TURNIP",
          "BEETROOT"
        ],
        "hint": "Think about which part of the plant is grown for food.",
        "easierHint": "These are root vegetables, with the part we usually eat growing underground.",
        "explanation": "Carrot, radish, turnip and beetroot are root vegetables. This separates them from the fruits grown on the other four plants."
      },
      {
        "label": "Put EAR before these",
        "words": [
          "DRUM",
          "RING",
          "WIG",
          "ACHE"
        ],
        "hint": "A body-part word fits before four tiles.",
        "easierHint": "EAR + DRUM makes EARDRUM. Find three more.",
        "explanation": "Eardrum, earring, earwig and earache all begin with EAR. An earwig is an insect, not an ear's hairstyle!"
      },
      {
        "label": "Taste words",
        "words": [
          "SWEET",
          "SOUR",
          "BITTER",
          "SALTY"
        ],
        "hint": "Four words describe something your tongue notices.",
        "easierHint": "Think about sugar, lemon, bitter flavours and salt.",
        "explanation": "Sweet, sour, bitter and salty are words for tastes. They describe food rather than naming a food."
      }
    ]
  },
  {
    "id": "look-again",
    "title": "Look Again",
    "difficulty": "Challenge",
    "groups": [
      {
        "label": "Put HEAD before these",
        "words": [
          "BAND",
          "LIGHT",
          "ACHE",
          "PHONES"
        ],
        "hint": "Try adding the same word at the beginning.",
        "easierHint": "Think of a headband and headphones.",
        "explanation": "Headband, headlight, headache and headphones all begin with HEAD."
      },
      {
        "label": "Put SNOW before these",
        "words": [
          "FLAKE",
          "FALL",
          "STORM",
          "DROP"
        ],
        "hint": "A wintry word can join each one.",
        "easierHint": "Put SNOW in front of each word.",
        "explanation": "Snowflake, snowfall, snowstorm and snowdrop begin with SNOW. A snowdrop is a small white flower."
      },
      {
        "label": "Wings, but not birds",
        "words": [
          "BEE",
          "BAT",
          "AEROPLANE",
          "BUTTERFLY"
        ],
        "hint": "They share a feature that helps them move.",
        "easierHint": "They all have wings, but none is a bird.",
        "explanation": "Bees, bats, aeroplanes and butterflies have wings. A bat is a mammal, not a bird."
      },
      {
        "label": "School subjects",
        "words": [
          "MATHS",
          "ENGLISH",
          "SCIENCE",
          "HISTORY"
        ],
        "hint": "Look at a school timetable.",
        "easierHint": "These are four subjects you learn at school.",
        "explanation": "Maths, English, science and history are school subjects."
      }
    ]
  },
  {
    "id": "new-discoveries",
    "title": "New Discoveries",
    "difficulty": "Challenge",
    "groups": [
      {
        "label": "Containers with a SPOUT",
        "words": [
          "TEAPOT",
          "KETTLE",
          "JUG",
          "WATERING CAN"
        ],
        "hint": "Think about the part that helps liquid come out.",
        "easierHint": "Each container has a SPOUT for pouring.",
        "explanation": "A teapot, kettle, jug and watering can have a spout that helps direct liquid when you pour."
      },
      {
        "label": "Put BOOK after these",
        "words": [
          "NOTE",
          "TEXT",
          "SCRAP",
          "COOK"
        ],
        "hint": "Add the same ending to make four new words.",
        "easierHint": "Each can go before BOOK.",
        "explanation": "Notebook, textbook, scrapbook and cookbook are four kinds of book."
      },
      {
        "label": "RINGS you can see",
        "words": [
          "SATURN",
          "TREE",
          "ONION",
          "FINGER"
        ],
        "hint": "The same round shape appears in different places.",
        "easierHint": "Think about rings in space, inside plants and worn as jewellery.",
        "explanation": "Saturn has rings; tree trunks have growth rings; sliced onions show rings; and fingers can wear rings."
      },
      {
        "label": "Compass directions",
        "words": [
          "NORTH",
          "SOUTH",
          "EAST",
          "WEST"
        ],
        "hint": "These help you find your way.",
        "easierHint": "Find the four main directions on a compass.",
        "explanation": "North, south, east and west are the four main compass directions."
      }
    ]
  },
  {
    "id": "unexpected-company",
    "title": "Unexpected Company",
    "difficulty": "Challenge",
    "groups": [
      {
        "label": "Birds that do not fly",
        "words": [
          "PENGUIN",
          "OSTRICH",
          "EMU",
          "KIWI"
        ],
        "hint": "They are all birds, but one usual bird skill is missing.",
        "easierHint": "These four are flightless birds.",
        "explanation": "Penguins, ostriches, emus and kiwis are birds that do not fly. Having wings does not always mean flying.",
        "sources": [
          "https://australian.museum/learn/animals/birds/"
        ]
      },
      {
        "label": "Names for animal groups",
        "words": [
          "PACK",
          "HERD",
          "FLOCK",
          "SWARM"
        ],
        "hint": "These do not name just one animal.",
        "easierHint": "Think of a pack of wolves or a swarm of bees.",
        "explanation": "Pack, herd, flock and swarm are names for groups of animals, such as wolves, cattle, birds and bees."
      },
      {
        "label": "Put FIRE before these",
        "words": [
          "ENGINE",
          "WORK",
          "PLACE",
          "WOOD"
        ],
        "hint": "The same word can come before each one.",
        "easierHint": "Think of a rescue vehicle, a sparkling display and a warm hearth.",
        "explanation": "Fire engine, firework, fireplace and firewood begin with FIRE."
      },
      {
        "label": "Add MAN to make heroes",
        "words": [
          "SUPER",
          "BAT",
          "SPIDER",
          "IRON"
        ],
        "hint": "Give four words the same ending to find familiar heroes.",
        "easierHint": "Put MAN after each one.",
        "explanation": "Superman, Batman, Spider-Man and Iron Man are superhero names. Some are written with a space or hyphen."
      }
    ]
  },
  {
    "id": "different-view",
    "title": "A Different View",
    "difficulty": "Challenge",
    "groups": [
      {
        "label": "Put FOOT before these",
        "words": [
          "PRINT",
          "STEP",
          "PATH",
          "STOOL"
        ],
        "hint": "Try putting the same body-part word first.",
        "easierHint": "Add FOOT to the beginning of each word.",
        "explanation": "Footprint, footstep, footpath and footstool all begin with FOOT."
      },
      {
        "label": "Put BLACK before these",
        "words": [
          "BERRY",
          "BOARD",
          "BIRD",
          "SMITH"
        ],
        "hint": "One colour can join each word.",
        "easierHint": "Put BLACK in front of each word.",
        "explanation": "Blackberry, blackboard, blackbird and blacksmith begin with BLACK. A blacksmith makes and repairs things from metal."
      },
      {
        "label": "Animals known for stripes",
        "words": [
          "TIGER",
          "ZEBRA",
          "WASP",
          "NUMBAT"
        ],
        "hint": "Look for a repeated pattern on their bodies.",
        "easierHint": "Look for animals with striped markings, including a Western Australian favourite.",
        "explanation": "Tigers, zebras, familiar yellow-and-black wasps and numbats have striped markings. A numbat has pale bands across its back.",
        "sources": [
          "https://library.dbca.wa.gov.au/FullTextFiles/016542.pdf"
        ]
      },
      {
        "label": "The four seasons",
        "words": [
          "SPRING",
          "SUMMER",
          "AUTUMN",
          "WINTER"
        ],
        "hint": "These come around every year.",
        "easierHint": "Find the four seasons.",
        "explanation": "Spring, summer, autumn and winter are the four seasons in the familiar four-season calendar."
      }
    ]
  },
  {
    "id": "word-expansion-21",
    "title": "Hidden Partners",
    "difficulty": "Challenge",
    "groups": [
      {
        "label": "Put BOOK before these",
        "words": [
          "SHOP",
          "SHELF",
          "WORM",
          "BINDING"
        ],
        "hint": "Four tiles are waiting for the same word partner.",
        "easierHint": "Try putting BOOK before each tile to make a familiar word or expression.",
        "explanation": "Bookshop, bookshelf, bookworm and bookbinding begin with BOOK. A bookworm can mean someone who loves reading; bookbinding joins pages into books."
      },
      {
        "label": "Put DOOR before these",
        "words": [
          "BELL",
          "KNOB",
          "MAT",
          "HANDLE"
        ],
        "hint": "Four tiles are waiting for the same word partner.",
        "easierHint": "Try putting DOOR before each tile to make a familiar word or expression.",
        "explanation": "Doorbell, doorknob, doormat and door handle begin with DOOR."
      },
      {
        "label": "Put SUN before these",
        "words": [
          "BURN",
          "RISE",
          "SET",
          "SHINE"
        ],
        "hint": "Four tiles are waiting for the same word partner.",
        "easierHint": "Try putting SUN before each tile to make a familiar word or expression.",
        "explanation": "Sunburn, sunrise, sunset and sunshine begin with SUN."
      },
      {
        "label": "Put WATER before these",
        "words": [
          "FALL",
          "PROOF",
          "MELON",
          "COLOUR"
        ],
        "hint": "Four tiles are waiting for the same word partner.",
        "easierHint": "Try putting WATER before each tile to make a familiar word or expression.",
        "explanation": "Waterfall, waterproof, watermelon and watercolour begin with WATER. Waterproof means able to keep water out; watercolour is a kind of paint or painting."
      }
    ]
  },
  {
    "id": "word-expansion-22",
    "title": "Missing Endings",
    "difficulty": "Challenge",
    "groups": [
      {
        "label": "Put LIGHT after these",
        "words": [
          "TORCH",
          "TRAFFIC",
          "MOON",
          "CANDLE"
        ],
        "hint": "Four tiles are waiting for the same word partner.",
        "easierHint": "Try putting LIGHT after each tile to make a familiar word or expression.",
        "explanation": "Torchlight, traffic light, moonlight and candlelight end with LIGHT."
      },
      {
        "label": "Put HOUSE after these",
        "words": [
          "BOAT",
          "WARE",
          "DOLL",
          "CLUB"
        ],
        "hint": "Four tiles are waiting for the same word partner.",
        "easierHint": "Try putting HOUSE after each tile to make a familiar word or expression.",
        "explanation": "Boathouse, warehouse, dollhouse and clubhouse end with HOUSE. A warehouse stores goods. WARE means goods made to be sold."
      },
      {
        "label": "Put WORK after these",
        "words": [
          "HOME",
          "TEAM",
          "GUESS",
          "PATCH"
        ],
        "hint": "Four tiles are waiting for the same word partner.",
        "easierHint": "Try putting WORK after each tile to make a familiar word or expression.",
        "explanation": "Homework, teamwork, guesswork and patchwork end with WORK."
      },
      {
        "label": "Put LINE after these",
        "words": [
          "FINISH",
          "FISHING",
          "PUNCH",
          "CLOTHES"
        ],
        "hint": "Four tiles are waiting for the same word partner.",
        "easierHint": "Try putting LINE after each tile to make a familiar word or expression.",
        "explanation": "Finish line, fishing line, punchline and clothesline end with LINE. A punchline is the funny ending of a joke."
      }
    ]
  },
  {
    "id": "word-expansion-23",
    "title": "Same Start, New Story",
    "difficulty": "Challenge",
    "groups": [
      {
        "label": "Put SEA before these",
        "words": [
          "HORSE",
          "WEED",
          "SHELL",
          "BED"
        ],
        "hint": "Four tiles are waiting for the same word partner.",
        "easierHint": "Try putting SEA before each tile to make a familiar word or expression.",
        "explanation": "Seahorse, seaweed, seashell and seabed begin with SEA."
      },
      {
        "label": "Put HEAD before these",
        "words": [
          "MASTER",
          "PHONES",
          "BAND",
          "ACHE"
        ],
        "hint": "Four tiles are waiting for the same word partner.",
        "easierHint": "Try putting HEAD before each tile to make a familiar word or expression.",
        "explanation": "Headmaster, headphones, headband and headache begin with HEAD."
      },
      {
        "label": "Put SNOW before these",
        "words": [
          "PLOUGH",
          "DRIFT",
          "SHOES",
          "MOBILE"
        ],
        "hint": "Four tiles are waiting for the same word partner.",
        "easierHint": "Try putting SNOW before each tile to make a familiar word or expression.",
        "explanation": "Snowplough, snowdrift, snowshoes and snowmobile begin with SNOW. Snowshoes help spread your weight over snow. A snowmobile is a vehicle for travelling over snow."
      },
      {
        "label": "Put FIRE before these",
        "words": [
          "FIGHTER",
          "ESCAPE",
          "FLY",
          "CRACKER"
        ],
        "hint": "Four tiles are waiting for the same word partner.",
        "easierHint": "Try putting FIRE before each tile to make a familiar word or expression.",
        "explanation": "Firefighter, fire escape, firefly and firecracker begin with FIRE. A firefly is an insect; a firecracker is a kind of firework."
      }
    ]
  },
  {
    "id": "word-expansion-24",
    "title": "Little Words, Big Changes",
    "difficulty": "Challenge",
    "groups": [
      {
        "label": "Put NIGHT before these",
        "words": [
          "MARE",
          "GOWN",
          "FALL",
          "TIME"
        ],
        "hint": "Four tiles are waiting for the same word partner.",
        "easierHint": "Try putting NIGHT before each tile to make a familiar word or expression.",
        "explanation": "Nightmare, nightgown, nightfall and nighttime begin with NIGHT. Nightfall is the arrival of darkness in the evening."
      },
      {
        "label": "Put EAR before these",
        "words": [
          "BUD",
          "LOBE",
          "MUFF",
          "WIG"
        ],
        "hint": "Four tiles are waiting for the same word partner.",
        "easierHint": "Try putting EAR before each tile to make a familiar word.",
        "explanation": "Earbud, earlobe, earmuff and earwig begin with EAR. An earbud is a small earphone; an earlobe is the soft lower part of an ear; an earmuff keeps an ear warm; an earwig is an insect."
      },
      {
        "label": "Put CAR before these",
        "words": [
          "WASH",
          "PARK",
          "POOL",
          "PORT"
        ],
        "hint": "Four tiles are waiting for the same word partner.",
        "easierHint": "Try putting CAR before each tile to make a familiar word or expression.",
        "explanation": "Car wash, car park, carpool and carport begin with CAR. A carpool is a group sharing car journeys. A carport is a covered shelter for a car."
      },
      {
        "label": "Put BUTTER before these",
        "words": [
          "FLY",
          "CUP",
          "MILK",
          "SCOTCH"
        ],
        "hint": "Four tiles are waiting for the same word partner.",
        "easierHint": "Try putting BUTTER before each tile to make a familiar word or expression.",
        "explanation": "Butterfly, buttercup, buttermilk and butterscotch begin with BUTTER. A buttercup is a flower; butterscotch is a sweet flavour. SCOTCH can mean to put a stop to something."
      }
    ]
  },
  {
    "id": "word-expansion-25",
    "title": "Word Workshop",
    "difficulty": "Challenge",
    "groups": [
      {
        "label": "Put BOARD after these",
        "words": [
          "SKATE",
          "KEY",
          "DASH",
          "CHALK"
        ],
        "hint": "Four tiles are waiting for the same word partner.",
        "easierHint": "Try putting BOARD after each tile to make a familiar word or expression.",
        "explanation": "Skateboard, keyboard, dashboard and chalkboard end with BOARD."
      },
      {
        "label": "Put BERRY after these",
        "words": [
          "STRAW",
          "RASP",
          "BLUE",
          "GOOSE"
        ],
        "hint": "Four tiles are waiting for the same word partner.",
        "easierHint": "Try putting BERRY after each tile to make a familiar word or expression.",
        "explanation": "Strawberry, raspberry, blueberry and gooseberry end with BERRY. A rasp can be a rough file or a harsh sound. The tiles are word pieces here, not descriptions of the fruits."
      },
      {
        "label": "Put CAKE after these",
        "words": [
          "PAN",
          "SPONGE",
          "OAT",
          "FRUIT"
        ],
        "hint": "Four tiles are waiting for the same word partner.",
        "easierHint": "Try putting CAKE after each tile to make a familiar word or expression.",
        "explanation": "Pancake, sponge cake, oatcake and fruitcake end with CAKE."
      },
      {
        "label": "Put TIME after these",
        "words": [
          "BED",
          "LUNCH",
          "LIFE",
          "SUMMER"
        ],
        "hint": "Four tiles are waiting for the same word partner.",
        "easierHint": "Try putting TIME after each tile to make a familiar word or expression.",
        "explanation": "Bedtime, lunchtime, lifetime and summertime end with TIME."
      }
    ]
  },
  {
    "id": "word-expansion-26",
    "title": "Phrase Finder",
    "difficulty": "Challenge",
    "groups": [
      {
        "label": "Put HAPPY before these",
        "words": [
          "BIRTHDAY",
          "PLACE",
          "CAMPER",
          "RETURNS"
        ],
        "hint": "Four tiles are waiting for the same word partner.",
        "easierHint": "Try putting HAPPY before each tile to make a familiar word or expression.",
        "explanation": "Happy birthday, happy place, happy camper and happy returns are familiar expressions. A happy place is somewhere that makes you feel content. A happy camper means a contented person, even away from camping. Happy returns appears in the birthday greeting “many happy returns”."
      },
      {
        "label": "Put LUCKY before these",
        "words": [
          "CHARM",
          "DIP",
          "BREAK",
          "ESCAPE"
        ],
        "hint": "Four tiles are waiting for the same word partner.",
        "easierHint": "Try putting LUCKY before each tile to make a familiar word or expression.",
        "explanation": "Lucky charm, lucky dip, lucky break and lucky escape are familiar expressions. A lucky dip gives you a surprise prize; a lucky break is a helpful piece of good fortune."
      },
      {
        "label": "Put OPEN before these",
        "words": [
          "AIR",
          "MIND",
          "SESAME",
          "PLAN"
        ],
        "hint": "Four tiles are waiting for the same word partner.",
        "easierHint": "Try putting OPEN before each tile to make a familiar word or expression.",
        "explanation": "Open air, open mind, open sesame and open plan are familiar expressions. Open sesame is a magical command in a story. Open-plan rooms have few dividing walls."
      },
      {
        "label": "Put DEEP before these",
        "words": [
          "FRIED",
          "FREEZE",
          "BREATH",
          "SLEEP"
        ],
        "hint": "Four tiles are waiting for the same word partner.",
        "easierHint": "Try putting DEEP before each tile to make a familiar word or expression.",
        "explanation": "Deep-fried, deep freeze, deep breath and deep sleep are familiar expressions. Deep-fried food is cooked in hot oil. A deep freeze can mean a freezer or a period of very cold weather."
      }
    ]
  },
  {
    "id": "word-expansion-27",
    "title": "Moving Meanings",
    "difficulty": "Stretch",
    "groups": [
      {
        "label": "Run very quickly",
        "words": [
          "DASH",
          "SPRINT",
          "RACE",
          "BOLT"
        ],
        "hint": "Imagine a sudden rush of movement.",
        "easierHint": "Find four verbs that can mean run very fast.",
        "explanation": "Dash, sprint, race and bolt can all describe running very quickly. BOLT here means rush away, not a metal fastener."
      },
      {
        "label": "Walk without hurrying",
        "words": [
          "AMBLE",
          "SAUNTER",
          "MEANDER",
          "STROLL"
        ],
        "hint": "There is no hurry in this group.",
        "easierHint": "Look for relaxed or wandering ways of walking.",
        "explanation": "Amble, saunter and stroll mean walk at an easy pace. To meander is to follow a wandering route, and can describe an unhurried walk."
      },
      {
        "label": "Jump",
        "words": [
          "LEAP",
          "HOP",
          "BOUND",
          "SPRING"
        ],
        "hint": "Feet can leave the ground in different ways.",
        "easierHint": "Find four verbs for jumping.",
        "explanation": "Leap, hop, bound and spring can all mean jump. SPRING here is an action, not a season."
      },
      {
        "label": "Turn around",
        "words": [
          "SPIN",
          "TWIRL",
          "ROTATE",
          "SWIVEL"
        ],
        "hint": "Think of turning on the spot.",
        "easierHint": "Find four verbs for turning around.",
        "explanation": "Spin, twirl, rotate and swivel describe turning around. They do not all suggest the same speed."
      }
    ]
  },
  {
    "id": "word-expansion-28",
    "title": "How Much and How Loud",
    "difficulty": "Stretch",
    "groups": [
      {
        "label": "Very large",
        "words": [
          "ENORMOUS",
          "HUGE",
          "GIANT",
          "MASSIVE"
        ],
        "hint": "Imagine something taking up lots of space.",
        "easierHint": "Find four adjectives meaning very big.",
        "explanation": "Enormous, huge, giant and massive can all describe something very large."
      },
      {
        "label": "Small in size",
        "words": [
          "TINY",
          "MINUTE",
          "LITTLE",
          "MINIATURE"
        ],
        "hint": "This group would not need much room.",
        "easierHint": "Find four words describing a small size.",
        "explanation": "Tiny, minute, little and miniature describe small size. MINUTE here is pronounced my-NYOOT and means very small, not sixty seconds."
      },
      {
        "label": "Loud or noisy",
        "words": [
          "NOISY",
          "LOUD",
          "ROWDY",
          "BOISTEROUS"
        ],
        "hint": "This group might disturb a peaceful room.",
        "easierHint": "Find four words that can describe noisy behaviour or sound.",
        "explanation": "Noisy and loud describe strong sound. Rowdy means noisy and disorderly; boisterous means noisy and energetic."
      },
      {
        "label": "Quiet or without sound",
        "words": [
          "QUIET",
          "SILENT",
          "HUSHED",
          "SOUNDLESS"
        ],
        "hint": "Listen carefully: there may be little to hear.",
        "easierHint": "Find four words describing little or no noise.",
        "explanation": "Quiet and hushed suggest little noise; silent and soundless mean without sound."
      }
    ]
  },
  {
    "id": "word-expansion-29",
    "title": "Ways with Words",
    "difficulty": "Stretch",
    "groups": [
      {
        "label": "Have a conversation",
        "words": [
          "TALK",
          "CHAT",
          "CONVERSE",
          "DISCUSS"
        ],
        "hint": "These suggest exchanging ideas with someone.",
        "easierHint": "Find four verbs for talking together.",
        "explanation": "Talk, chat and converse can mean have a conversation. To discuss something is to talk about it together."
      },
      {
        "label": "Speak loudly",
        "words": [
          "SHOUT",
          "YELL",
          "BELLOW",
          "HOLLER"
        ],
        "hint": "Someone far away might hear these.",
        "easierHint": "Find four verbs for using a loud voice.",
        "explanation": "Shout, yell, bellow and holler mean speak or call loudly."
      },
      {
        "label": "Speak quietly or unclearly",
        "words": [
          "WHISPER",
          "MURMUR",
          "MUTTER",
          "MUMBLE"
        ],
        "hint": "You may need to listen very closely.",
        "easierHint": "Look for soft speech or words that are hard to make out.",
        "explanation": "Whisper and murmur suggest quiet speech. Mutter means speak quietly, often with annoyance; mumble means speak unclearly, often quietly."
      },
      {
        "label": "Ask",
        "words": [
          "QUESTION",
          "ENQUIRE",
          "QUERY",
          "ASK"
        ],
        "hint": "These speakers want an answer.",
        "easierHint": "Find four verbs used when asking for information.",
        "explanation": "Ask, question, enquire and query can all mean seek information by asking."
      }
    ]
  },
  {
    "id": "word-expansion-30",
    "title": "Feelings in Disguise",
    "difficulty": "Stretch",
    "groups": [
      {
        "label": "Happy",
        "words": [
          "HAPPY",
          "GLAD",
          "PLEASED",
          "DELIGHTED"
        ],
        "hint": "Good news might make you feel this way.",
        "easierHint": "Find four words for feeling happy.",
        "explanation": "Happy, glad, pleased and delighted describe positive, happy feelings. Delighted means very pleased."
      },
      {
        "label": "Sad",
        "words": [
          "SAD",
          "UNHAPPY",
          "MISERABLE",
          "SORROWFUL"
        ],
        "hint": "These feelings are less cheerful.",
        "easierHint": "Find four words for feeling sad.",
        "explanation": "Sad, unhappy, miserable and sorrowful can describe sadness. Miserable can mean very unhappy; sorrowful means full of sadness."
      },
      {
        "label": "Angry",
        "words": [
          "ANGRY",
          "CROSS",
          "FURIOUS",
          "IRATE"
        ],
        "hint": "Imagine someone who feels something is very unfair.",
        "easierHint": "Find four words for feeling angry.",
        "explanation": "Angry, cross, furious and irate describe anger. Furious and irate mean very angry."
      },
      {
        "label": "Frightened",
        "words": [
          "AFRAID",
          "SCARED",
          "FRIGHTENED",
          "TERRIFIED"
        ],
        "hint": "A sudden fright might bring these feelings.",
        "easierHint": "Find four words for feeling fear.",
        "explanation": "Afraid, scared, frightened and terrified describe fear. Terrified means very frightened."
      }
    ]
  },
  {
    "id": "word-expansion-31",
    "title": "The Unseen Ending",
    "difficulty": "Challenge",
    "groups": [
      {
        "label": "Put STONE after these",
        "words": [
          "MILE",
          "GEM",
          "COBBLE",
          "LIME"
        ],
        "hint": "Four tiles are waiting for the same word partner.",
        "easierHint": "Try putting STONE after each tile to make a familiar word or expression.",
        "explanation": "Milestone, gemstone, cobblestone and limestone end with STONE. A milestone can mark a distance or an important achievement. A cobble is a rounded paving stone."
      },
      {
        "label": "Put MARK after these",
        "words": [
          "BOOK",
          "BENCH",
          "QUESTION",
          "SKID"
        ],
        "hint": "Four tiles are waiting for the same word partner.",
        "easierHint": "Try putting MARK after each tile to make a familiar word or expression.",
        "explanation": "Bookmark, benchmark, question mark and skid mark end with MARK. A benchmark is a standard used for comparison; a skid mark is a mark left when something slides."
      },
      {
        "label": "Put SHIP after these",
        "words": [
          "FLAG",
          "HARD",
          "RELATION",
          "CHAMPION"
        ],
        "hint": "Four tiles are waiting for the same word partner.",
        "easierHint": "Try putting SHIP after each tile to make a familiar word or expression.",
        "explanation": "Flagship, hardship, relationship and championship end with SHIP. Only flagship names a ship. Hardship means serious difficulty."
      },
      {
        "label": "Put PAPER after these",
        "words": [
          "WALL",
          "NEWS",
          "WRAPPING",
          "TOILET"
        ],
        "hint": "Four tiles are waiting for the same word partner.",
        "easierHint": "Try putting PAPER after each tile to make a familiar word or expression.",
        "explanation": "Wallpaper, newspaper, wrapping paper and toilet paper end with PAPER."
      }
    ]
  },
  {
    "id": "word-expansion-32",
    "title": "A Word in Front",
    "difficulty": "Challenge",
    "groups": [
      {
        "label": "Put TEA before these",
        "words": [
          "SPOON",
          "POT",
          "CUP",
          "LEAF"
        ],
        "hint": "Four tiles are waiting for the same word partner.",
        "easierHint": "Try putting TEA before each tile to make a familiar word or expression.",
        "explanation": "Teaspoon, teapot, teacup and tea leaf begin with TEA."
      },
      {
        "label": "Put PLAY before these",
        "words": [
          "GROUND",
          "MATE",
          "PEN",
          "LIST"
        ],
        "hint": "Four tiles are waiting for the same word partner.",
        "easierHint": "Try putting PLAY before each tile to make a familiar word or expression.",
        "explanation": "Playground, playmate, playpen and playlist begin with PLAY. A playlist is a chosen list of songs or other recordings."
      },
      {
        "label": "Put HAND before these",
        "words": [
          "SHAKE",
          "CUFF",
          "WRITING",
          "CLAP"
        ],
        "hint": "Four tiles are waiting for the same word partner.",
        "easierHint": "Try putting HAND before each tile to make a familiar word.",
        "explanation": "Handshake, handcuff, handwriting and handclap begin with HAND."
      },
      {
        "label": "Put SIDE before these",
        "words": [
          "STEP",
          "KICK",
          "WAYS",
          "SHOW"
        ],
        "hint": "Four tiles are waiting for the same word partner.",
        "easierHint": "Try putting SIDE before each tile to make a familiar word or expression.",
        "explanation": "Sidestep, sidekick, sideways and sideshow begin with SIDE. To sidestep is to step to one side or avoid something. A sidekick is a helper or companion; a sideshow is a smaller show beside a main attraction."
      }
    ]
  },
  {
    "id": "word-expansion-33",
    "title": "Surprising Endings",
    "difficulty": "Challenge",
    "groups": [
      {
        "label": "Put BAG after these",
        "words": [
          "BEAN",
          "TEA",
          "SLEEPING",
          "PUNCH"
        ],
        "hint": "Four tiles are waiting for the same word partner.",
        "easierHint": "Try putting BAG after each tile to make a familiar word or expression.",
        "explanation": "Beanbag, teabag, sleeping bag and punchbag end with BAG."
      },
      {
        "label": "Put TOP after these",
        "words": [
          "LAP",
          "DESK",
          "HILL",
          "ROOF"
        ],
        "hint": "Four tiles are waiting for the same word partner.",
        "easierHint": "Try putting TOP after each tile to make a familiar word or expression.",
        "explanation": "Laptop, desktop, hilltop and rooftop end with TOP. Laptop and desktop can name kinds of computer; hilltop and rooftop name high places."
      },
      {
        "label": "Put FISH after these",
        "words": [
          "GOLD",
          "STAR",
          "CAT",
          "JELLY"
        ],
        "hint": "Four tiles are waiting for the same word partner.",
        "easierHint": "Try putting FISH after each tile to make a familiar word or expression.",
        "explanation": "Goldfish, starfish, catfish and jellyfish end with FISH. This is a word connection: starfish and jellyfish are not actually fish."
      },
      {
        "label": "Put BELL after these",
        "words": [
          "DOOR",
          "COW",
          "DUMB",
          "BLUE"
        ],
        "hint": "Four tiles are waiting for the same word partner.",
        "easierHint": "Try putting BELL after each tile to make a familiar word or expression.",
        "explanation": "Doorbell, cowbell, dumbbell and bluebell end with BELL. A dumbbell is an exercise weight; a bluebell is a flower. DUMB is used only as a word piece here."
      }
    ]
  },
  {
    "id": "word-expansion-34",
    "title": "Which Way Now?",
    "difficulty": "Stretch",
    "groups": [
      {
        "label": "Move from side to side",
        "words": [
          "SWAY",
          "ROCK",
          "SWING",
          "WAGGLE"
        ],
        "hint": "Imagine movement that keeps coming back.",
        "easierHint": "Find four verbs for moving from side to side.",
        "explanation": "Sway, rock, swing and waggle can all describe movement from side to side. Here rock is an action, not a stone."
      },
      {
        "label": "Move upwards",
        "words": [
          "ASCEND",
          "RISE",
          "CLIMB",
          "SOAR"
        ],
        "hint": "These movements could take you nearer the clouds.",
        "easierHint": "Find four verbs for moving upwards.",
        "explanation": "Ascend and rise mean move upwards; climb means go up; soar can mean rise high into the air."
      },
      {
        "label": "Move downwards",
        "words": [
          "FALL",
          "DROP",
          "PLUNGE",
          "DESCEND"
        ],
        "hint": "Think about where the movement ends.",
        "easierHint": "Find four verbs for moving downwards.",
        "explanation": "Fall, drop, plunge and descend can all describe downward movement. Plunge suggests a sudden or steep fall."
      },
      {
        "label": "Stop for a while",
        "words": [
          "PAUSE",
          "WAIT",
          "HALT",
          "STOP"
        ],
        "hint": "This group gives the journey a rest.",
        "easierHint": "Find four verbs for stopping or waiting.",
        "explanation": "Pause, wait, halt and stop can all tell someone to stop moving for a while."
      }
    ]
  },
  {
    "id": "word-expansion-35",
    "title": "How Much Effort?",
    "difficulty": "Stretch",
    "groups": [
      {
        "label": "Not difficult",
        "words": [
          "EASY",
          "SIMPLE",
          "EFFORTLESS",
          "UNDEMANDING"
        ],
        "hint": "These tasks should not need much effort.",
        "easierHint": "Find four words for tasks that are not difficult.",
        "explanation": "Easy, simple, effortless and undemanding can describe a task that requires little effort or difficulty."
      },
      {
        "label": "Difficult to do",
        "words": [
          "HARD",
          "TRICKY",
          "TOUGH",
          "CHALLENGING"
        ],
        "hint": "These tasks may take some effort to work out.",
        "easierHint": "Find four words for difficult tasks.",
        "explanation": "Hard, tricky, tough and challenging can describe tasks that are difficult to do. Hard and tough describe difficulty here, rather than the texture of an object."
      },
      {
        "label": "Moving quickly",
        "words": [
          "QUICK",
          "RAPID",
          "SWIFT",
          "SPEEDY"
        ],
        "hint": "These would suit a fast journey.",
        "easierHint": "Find four words meaning fast.",
        "explanation": "Quick, rapid, swift and speedy can all describe fast movement."
      },
      {
        "label": "Moving slowly",
        "words": [
          "SLOW",
          "LEISURELY",
          "SLUGGISH",
          "UNHURRIED"
        ],
        "hint": "Nobody in this group is rushing.",
        "easierHint": "Find four words describing a slow pace.",
        "explanation": "Slow, leisurely, sluggish and unhurried describe a pace that is not fast. Leisurely and unhurried can sound pleasant; sluggish often suggests a lack of energy."
      }
    ]
  },
  {
    "id": "word-expansion-36",
    "title": "What Are You Saying?",
    "difficulty": "Challenge",
    "groups": [
      {
        "label": "Make a suggestion",
        "words": [
          "SUGGEST",
          "PROPOSE",
          "RECOMMEND",
          "PUT FORWARD"
        ],
        "hint": "These words offer an idea for someone to consider.",
        "easierHint": "Find four ways to suggest an idea or plan.",
        "explanation": "Suggest, propose, recommend and put forward can all describe offering an idea or plan for someone to consider. Recommend also expresses approval of the idea."
      },
      {
        "label": "Make a promise",
        "words": [
          "PROMISE",
          "PLEDGE",
          "SWEAR",
          "GIVE YOUR WORD"
        ],
        "hint": "These words give someone your word.",
        "easierHint": "Find four verbs for making a serious promise.",
        "explanation": "Promise, pledge, swear and give your word can all mean make a serious promise. Swear has this meaning as well as other meanings."
      },
      {
        "label": "Say it is forbidden",
        "words": [
          "FORBID",
          "BAN",
          "PROHIBIT",
          "SAY NO TO"
        ],
        "hint": "This group will not give permission.",
        "easierHint": "Find four verbs meaning say something is not allowed.",
        "explanation": "Forbid, ban, prohibit and say no to can mean refuse to allow an action."
      },
      {
        "label": "Be sorry for wrongdoing",
        "words": [
          "APOLOGISE",
          "REGRET",
          "REPENT",
          "SAY SORRY"
        ],
        "hint": "These words could help after a mistake.",
        "easierHint": "Find four ways to feel or express sorrow for something you did wrong.",
        "explanation": "Apologise and say sorry express sorrow for wrongdoing. Regret means feel sorry about something; repent means feel sorry for wrongdoing and want to do better."
      }
    ]
  },
  {
    "id": "word-expansion-37",
    "title": "A Figure of Feeling",
    "difficulty": "Challenge",
    "groups": [
      {
        "label": "Feeling delighted",
        "words": [
          "OVER THE MOON",
          "ON CLOUD NINE",
          "WALKING ON AIR",
          "TICKLED PINK"
        ],
        "hint": "These expressions do not require a rocket or paint.",
        "easierHint": "Find four expressions for being very happy.",
        "explanation": "Over the moon, on cloud nine, walking on air and tickled pink all express delight. They are figurative: you need not really be in the sky or change colour."
      },
      {
        "label": "Feeling angry",
        "words": [
          "SEE RED",
          "BLOOD BOILING",
          "HIT THE ROOF",
          "BLOW YOUR TOP"
        ],
        "hint": "Imagine someone losing their temper.",
        "easierHint": "Find four expressions connected with anger.",
        "explanation": "See red, blood boiling, hit the roof and blow your top are expressions for being or becoming very angry."
      },
      {
        "label": "Feeling frightened",
        "words": [
          "COLD FEET",
          "KNEES KNOCKING",
          "HAIR ON END",
          "HEART IN MOUTH"
        ],
        "hint": "This group might appear before a scary moment.",
        "easierHint": "Find four expressions connected with fear or nerves.",
        "explanation": "Cold feet means losing courage. Knees knocking, hair on end and heart in mouth describe being very frightened or nervous."
      },
      {
        "label": "Feeling confused",
        "words": [
          "ALL AT SEA",
          "IN A MUDDLE",
          "AT A LOSS",
          "HEAD IN A SPIN"
        ],
        "hint": "These expressions suggest you cannot work things out.",
        "easierHint": "Find four expressions for being confused or not knowing what to do.",
        "explanation": "All at sea, in a muddle, at a loss and head in a spin can describe confusion or not knowing what to do next."
      }
    ]
  },
  {
    "id": "word-expansion-38",
    "title": "Borrowed Body Parts",
    "difficulty": "Challenge",
    "groups": [
      {
        "label": "Have an EYE",
        "words": [
          "NEEDLE",
          "POTATO",
          "HURRICANE",
          "PEACOCK FEATHER"
        ],
        "hint": "A body-part name appears where no one is looking.",
        "easierHint": "Think of a needle eye and the centre of a powerful storm.",
        "explanation": "A needle has an eye for thread; a potato has eyes where shoots grow; a mature hurricane can have a calm central eye; and a peacock tail feather can have an eye-shaped marking called an eye or eyespot."
      },
      {
        "label": "Have a HEAD",
        "words": [
          "MATCH",
          "NAIL",
          "SCREW",
          "CABBAGE"
        ],
        "hint": "Think about a top or a tightly packed whole.",
        "easierHint": "Find four things with a part or form called a head.",
        "explanation": "A match has a head that lights; a nail and a screw each have a head at the top; and cabbage leaves can form a rounded head."
      },
      {
        "label": "Have a NECK",
        "words": [
          "BOTTLE",
          "FLASK",
          "VASE",
          "SHIRT"
        ],
        "hint": "Look for a narrow section or an opening near the top.",
        "easierHint": "Find four objects with a part called a neck.",
        "explanation": "A bottle, flask and vase can have narrow necks. A shirt has a neck opening."
      },
      {
        "label": "Have LEGS",
        "words": [
          "TABLE",
          "CHAIR",
          "TROUSERS",
          "TRIPOD"
        ],
        "hint": "Some support a thing; some cover a person.",
        "easierHint": "Find four objects with parts called legs.",
        "explanation": "Tables, chairs and tripods have supporting legs. Trousers have two fabric legs."
      }
    ]
  },
  {
    "id": "word-expansion-39",
    "title": "At the Making Table",
    "difficulty": "Stretch",
    "groups": [
      {
        "label": "Cut into pieces",
        "words": [
          "SLICE",
          "CHOP",
          "SNIP",
          "SAW"
        ],
        "hint": "You may end with more pieces than you started with.",
        "easierHint": "Find four actions that cut material.",
        "explanation": "Slice, chop, snip and saw are ways to cut. A saw is a tool, but SAW is also the action of cutting with it."
      },
      {
        "label": "Fasten together",
        "words": [
          "GLUE",
          "STITCH",
          "STAPLE",
          "TIE"
        ],
        "hint": "These actions help pieces stay together.",
        "easierHint": "Find four actions for fastening things together.",
        "explanation": "You can fasten pieces with glue, stitches, staples or ties. Here all four tiles are used as action words."
      },
      {
        "label": "Change the shape",
        "words": [
          "BEND",
          "FOLD",
          "TWIST",
          "CURL"
        ],
        "hint": "The material stays in one piece but takes a new shape.",
        "easierHint": "Find four actions for reshaping something without cutting it.",
        "explanation": "Bend, fold, twist and curl change the shape of something without needing to cut it into separate pieces."
      },
      {
        "label": "Make words or pictures",
        "words": [
          "DRAW",
          "WRITE",
          "PAINT",
          "PRINT"
        ],
        "hint": "These can leave a message or an image behind.",
        "easierHint": "Find four actions for making words or pictures on a surface.",
        "explanation": "Draw, write, paint and print are ways of making words, pictures or designs on a surface."
      }
    ]
  },
  {
    "id": "word-expansion-40",
    "title": "One Word, Many Jobs",
    "difficulty": "Challenge",
    "groups": [
      {
        "label": "Meanings of MEAN",
        "words": [
          "UNKIND",
          "INTEND",
          "AVERAGE",
          "SIGNIFY"
        ],
        "hint": "One small word has several quite different jobs.",
        "easierHint": "One word can mean unkind, intend, average or signify.",
        "explanation": "MEAN can describe someone unkind, tell what you intend, name an average, or explain what something signifies. These are different senses of the same word."
      },
      {
        "label": "Meanings of LIGHT",
        "words": [
          "LAMP",
          "IGNITE",
          "PALE",
          "NOT HEAVY"
        ],
        "hint": "Look for a word that changes its job in different sentences.",
        "easierHint": "Think of different meanings of LIGHT.",
        "explanation": "A LIGHT can be a lamp. To LIGHT a candle is to ignite it. A LIGHT colour is pale, and a LIGHT bag is not heavy."
      },
      {
        "label": "Meanings of FINE",
        "words": [
          "PENALTY",
          "TINY",
          "WELL",
          "EXCELLENT"
        ],
        "hint": "One familiar word can link these different ideas.",
        "easierHint": "Think of a parking FINE and saying you feel FINE.",
        "explanation": "A FINE is a money penalty. FINE grains are tiny, feeling FINE means feeling well, and a FINE performance is excellent."
      },
      {
        "label": "Meanings of BRIGHT",
        "words": [
          "CLEVER",
          "SHINY",
          "CHEERFUL",
          "VIVID"
        ],
        "hint": "Think of one describing word used in several ways.",
        "easierHint": "Think of a BRIGHT child, a BRIGHT surface, a BRIGHT mood and BRIGHT colours.",
        "explanation": "BRIGHT can mean clever, shiny, cheerful or vivid. Each tile points to a different use of the word."
      }
    ]
  },
  {
    "id": "word-expansion-41",
    "title": "A Touch of Meaning",
    "difficulty": "Stretch",
    "groups": [
      {
        "label": "Feels rough",
        "words": [
          "COARSE",
          "GRITTY",
          "SCRATCHY",
          "ABRASIVE"
        ],
        "hint": "Imagine a surface that could rub or scrape.",
        "easierHint": "Find four words describing rough textures.",
        "explanation": "Coarse, gritty, scratchy and abrasive describe rough textures. An abrasive surface can rub material away."
      },
      {
        "label": "Feels sticky",
        "words": [
          "STICKY",
          "TACKY",
          "GUMMY",
          "GLUEY"
        ],
        "hint": "These surfaces do not let go easily.",
        "easierHint": "Find four words describing sticky textures.",
        "explanation": "Sticky, tacky, gummy and gluey describe textures that cling to things. Tacky has this meaning as well as other meanings."
      },
      {
        "label": "Has a fluffy texture",
        "words": [
          "FLUFFY",
          "DOWNY",
          "FLEECY",
          "FURRY"
        ],
        "hint": "Think of lots of fine, soft fibres or hairs.",
        "easierHint": "Find four words describing fluffy or hairy textures.",
        "explanation": "Fluffy, downy, fleecy and furry describe textures with soft fibres, feathers or hairs."
      },
      {
        "label": "Has a hard surface",
        "words": [
          "HARD",
          "FIRM",
          "RIGID",
          "UNYIELDING"
        ],
        "hint": "These surfaces resist being pressed out of shape.",
        "easierHint": "Find four words for a surface that does not give way easily.",
        "explanation": "Hard, firm, rigid and unyielding can describe surfaces that resist pressure or bending. They describe resistance rather than stickiness, roughness or fluffiness."
      }
    ]
  },
  {
    "id": "word-expansion-42",
    "title": "Inside Your Head",
    "difficulty": "Stretch",
    "groups": [
      {
        "label": "Remember the past",
        "words": [
          "REMEMBER",
          "RECALL",
          "RECOLLECT",
          "REMINISCE"
        ],
        "hint": "These words look backwards without turning round.",
        "easierHint": "Find four verbs connected with remembering.",
        "explanation": "Remember, recall and recollect mean bring something back to mind. Reminisce means remember and often talk about past experiences."
      },
      {
        "label": "Think up something new",
        "words": [
          "INVENT",
          "CREATE",
          "DEVISE",
          "DREAM UP"
        ],
        "hint": "These actions can start with a new idea.",
        "easierHint": "Find four verbs for thinking up or making something new.",
        "explanation": "Invent, create, devise and dream up can all describe producing a new idea or plan."
      },
      {
        "label": "Make a choice",
        "words": [
          "CHOOSE",
          "SELECT",
          "PICK",
          "OPT FOR"
        ],
        "hint": "You will not take every option.",
        "easierHint": "Find four ways to say choose.",
        "explanation": "Choose, select, pick and opt for mean decide which option you want."
      },
      {
        "label": "Look closely to check",
        "words": [
          "CHECK",
          "INSPECT",
          "EXAMINE",
          "LOOK OVER"
        ],
        "hint": "These actions help you spot a problem.",
        "easierHint": "Find four ways of checking something by looking at it.",
        "explanation": "Check, inspect, examine and look over can all mean look carefully at something to find out about its condition or correctness."
      }
    ]
  },
  {
    "id": "word-expansion-43",
    "title": "Something Is Missing",
    "difficulty": "Challenge",
    "groups": [
      {
        "label": "Nothing inside",
        "words": [
          "EMPTY",
          "VACANT",
          "UNFILLED",
          "NOTHING INSIDE"
        ],
        "hint": "Imagine opening a container and finding no contents.",
        "easierHint": "Find four ways of saying a space has nothing in it.",
        "explanation": "Empty, vacant, unfilled and nothing inside can describe a space without contents. Vacant can also mean not occupied."
      },
      {
        "label": "No movement",
        "words": [
          "STILL",
          "MOTIONLESS",
          "STATIC",
          "AT REST"
        ],
        "hint": "Nothing in this group is going anywhere.",
        "easierHint": "Find four ways to describe something that is not moving.",
        "explanation": "Still, motionless, static and at rest can describe something that is not moving. Static here describes a fixed position, not a crackling sound."
      },
      {
        "label": "Not in view",
        "words": [
          "HIDDEN",
          "UNSEEN",
          "CONCEALED",
          "OUT OF SIGHT"
        ],
        "hint": "Your eyes cannot find this group.",
        "easierHint": "Find four ways of saying something is not visible to the viewer.",
        "explanation": "Hidden, unseen, concealed and out of sight describe something not visible to the person looking."
      },
      {
        "label": "No companion",
        "words": [
          "ALONE",
          "SOLO",
          "LONE",
          "BY YOURSELF"
        ],
        "hint": "There is no one else accompanying you.",
        "easierHint": "Find four ways of saying someone has no companion.",
        "explanation": "Alone, solo, lone and by yourself can describe someone without a companion. A lone traveller is a traveller on their own."
      }
    ]
  },
  {
    "id": "word-expansion-44",
    "title": "Can It Be Trusted?",
    "difficulty": "Challenge",
    "groups": [
      {
        "label": "Genuine, not an imitation",
        "words": [
          "REAL",
          "GENUINE",
          "AUTHENTIC",
          "ORIGINAL"
        ],
        "hint": "These are the real thing.",
        "easierHint": "Find four words describing something that is not a copy or fake.",
        "explanation": "Real, genuine, authentic and original can describe the actual thing rather than an imitation. Original here means the original item, not a later copy."
      },
      {
        "label": "Fake, not genuine",
        "words": [
          "FALSE",
          "FAKE",
          "BOGUS",
          "PHONEY"
        ],
        "hint": "These might only pretend to be the real thing.",
        "easierHint": "Find four words describing something that is not genuine.",
        "explanation": "False, fake, bogus and phoney can describe something that is not genuine."
      },
      {
        "label": "Strongly built",
        "words": [
          "TOUGH",
          "STRONG",
          "STURDY",
          "ROBUST"
        ],
        "hint": "These things should stand up to rough treatment.",
        "easierHint": "Find four words describing something strong and hard to damage.",
        "explanation": "Tough, strong, sturdy and robust can describe well-built things that resist damage."
      },
      {
        "label": "Easily damaged",
        "words": [
          "FRAGILE",
          "DELICATE",
          "BREAKABLE",
          "FLIMSY"
        ],
        "hint": "These need gentle handling.",
        "easierHint": "Find four words describing things that can be damaged easily.",
        "explanation": "Fragile, delicate and breakable describe things that can be damaged easily. Flimsy describes something too weak or thin to be sturdy."
      }
    ]
  },
  {
    "id": "word-expansion-45",
    "title": "Change It Around",
    "difficulty": "Stretch",
    "groups": [
      {
        "label": "Become or make bigger",
        "words": [
          "ENLARGE",
          "EXPAND",
          "GROW",
          "INCREASE"
        ],
        "hint": "Imagine a balloon taking up more room.",
        "easierHint": "Find four verbs connected with becoming bigger.",
        "explanation": "Enlarge, expand, grow and increase can describe becoming bigger or making something bigger."
      },
      {
        "label": "Become or make smaller",
        "words": [
          "SHRINK",
          "REDUCE",
          "DECREASE",
          "CONTRACT"
        ],
        "hint": "Imagine something taking up less room.",
        "easierHint": "Find four verbs connected with becoming smaller.",
        "explanation": "Shrink, reduce, decrease and contract can describe becoming smaller or making something smaller. Contract here is an action, not a written agreement."
      },
      {
        "label": "Bring together",
        "words": [
          "JOIN",
          "UNITE",
          "COMBINE",
          "MERGE"
        ],
        "hint": "Separate parts become a whole.",
        "easierHint": "Find four verbs for bringing things together.",
        "explanation": "Join, unite, combine and merge mean bring things together. The important idea is togetherness, not simply size."
      },
      {
        "label": "Move or break apart",
        "words": [
          "DIVIDE",
          "SPLIT",
          "PART",
          "SEPARATE"
        ],
        "hint": "A whole becomes separate parts.",
        "easierHint": "Find four verbs for making or moving things apart.",
        "explanation": "Divide, split, part and separate can describe making or moving things apart. The important idea is separation, not simply size."
      }
    ]
  }
];
if(typeof module==='object'&&module.exports)module.exports=puzzles;else root.FOUR_PUZZLES=puzzles;
})(typeof globalThis!=='undefined'?globalThis:this);
