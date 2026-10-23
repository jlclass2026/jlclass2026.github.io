/* Hand-authored classroom puzzles. */
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
  }
];
if(typeof module==='object'&&module.exports)module.exports=puzzles;else root.FOUR_PUZZLES=puzzles;
})(typeof globalThis!=='undefined'?globalThis:this);
