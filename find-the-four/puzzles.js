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
  }
];
if(typeof module==='object'&&module.exports)module.exports=puzzles;else root.FOUR_PUZZLES=puzzles;
})(typeof globalThis!=='undefined'?globalThis:this);
