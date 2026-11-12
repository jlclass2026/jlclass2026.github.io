/* Drawing-led farm scenes. No pupil names or source scans. */
window.FARM_DESIGNS = [
  {
    "id": "farm-01",
    "title": "Farm KI",
    "view": "plan",
    "features": [
      {
        "type": "crop",
        "label": "Fruit orchard",
        "x": 1,
        "y": 3,
        "w": 8,
        "h": 25,
        "description": "Fruit orchard",
        "kind": "fruit",
        "color": "#c68b45"
      },
      {
        "type": "tank",
        "label": "Rain tank",
        "x": 1,
        "y": 33,
        "w": 8,
        "h": 15,
        "description": "Rain tank"
      },
      {
        "type": "tree",
        "label": "Mango and avocado tree",
        "x": 10,
        "y": 10,
        "w": 12,
        "h": 42,
        "description": "Mango and avocado tree",
        "product": "Fruit",
        "kind": "mango"
      },
      {
        "type": "crop",
        "label": "Grape vines",
        "x": 22,
        "y": 3,
        "w": 12,
        "h": 24,
        "description": "Grape vines",
        "kind": "grapes",
        "product": "Grapes"
      },
      {
        "type": "crop",
        "label": "Carrots and tomatoes",
        "x": 35,
        "y": 18,
        "w": 9,
        "h": 25,
        "description": "Carrots and tomatoes",
        "kind": "carrot",
        "product": "Vegetables"
      },
      {
        "type": "tree",
        "label": "Peach tree",
        "x": 44,
        "y": 8,
        "w": 7,
        "h": 35,
        "description": "Peach tree",
        "kind": "peach",
        "product": "Peaches"
      },
      {
        "type": "pond",
        "label": "Pond with island",
        "x": 23,
        "y": 42,
        "w": 13,
        "h": 23,
        "description": "Pond with island",
        "kind": "island"
      },
      {
        "type": "animal",
        "label": "Sheep enclosure",
        "x": 1,
        "y": 60,
        "w": 18,
        "h": 35,
        "description": "Sheep enclosure",
        "kind": "sheep",
        "product": "Wool",
        "count": 6
      },
      {
        "type": "house",
        "label": "Guinea pig shelter",
        "x": 22,
        "y": 70,
        "w": 9,
        "h": 25,
        "description": "Guinea pig shelter",
        "kind": "guineapig",
        "color": "#ef86c1",
        "roof": "#a1d854"
      },
      {
        "type": "compost",
        "label": "Compost bin",
        "x": 35,
        "y": 68,
        "w": 15,
        "h": 28,
        "description": "Compost bin"
      },
      {
        "type": "crop",
        "label": "Lettuce bed",
        "x": 53,
        "y": 3,
        "w": 8,
        "h": 24,
        "description": "Lettuce bed",
        "kind": "lettuce",
        "product": "Lettuce"
      },
      {
        "type": "worm",
        "label": "Worm farm",
        "x": 64,
        "y": 10,
        "w": 7,
        "h": 22,
        "description": "Worm farm"
      },
      {
        "type": "tree",
        "label": "Bee tree",
        "x": 73,
        "y": 3,
        "w": 7,
        "h": 30,
        "description": "Bee tree",
        "kind": "hive"
      },
      {
        "type": "beehive",
        "label": "Bee hive",
        "x": 75,
        "y": 13,
        "w": 3,
        "h": 7,
        "description": "Bee hive",
        "product": "Honey"
      },
      {
        "type": "flower",
        "label": "Sunflowers",
        "x": 82,
        "y": 12,
        "w": 11,
        "h": 18,
        "description": "Sunflowers",
        "kind": "sunflower",
        "color": "#f4ce49"
      },
      {
        "type": "tree",
        "label": "Second bee tree",
        "x": 94,
        "y": 20,
        "w": 5,
        "h": 32,
        "description": "Second bee tree",
        "kind": "hive"
      },
      {
        "type": "beehive",
        "label": "Second hive",
        "x": 96,
        "y": 33,
        "w": 2,
        "h": 6,
        "description": "Second hive",
        "product": "Honey"
      },
      {
        "type": "animal",
        "label": "Cow enclosure",
        "x": 53,
        "y": 35,
        "w": 18,
        "h": 60,
        "description": "Cow enclosure",
        "kind": "cow",
        "count": 4,
        "product": "Milk"
      },
      {
        "type": "flower",
        "label": "Red roses",
        "x": 80,
        "y": 30,
        "w": 7,
        "h": 18,
        "description": "Red roses",
        "color": "#e85b79"
      },
      {
        "type": "crop",
        "label": "Cotton",
        "x": 74,
        "y": 42,
        "w": 8,
        "h": 22,
        "description": "Cotton",
        "kind": "cotton",
        "product": "Cotton"
      },
      {
        "type": "house",
        "label": "Farmhouse",
        "x": 81,
        "y": 57,
        "w": 15,
        "h": 38,
        "description": "Farmhouse",
        "color": "#fff8df",
        "roof": "#efad37"
      },
      {
        "type": "tank",
        "label": "House tank",
        "x": 96,
        "y": 62,
        "w": 4,
        "h": 28,
        "description": "House tank"
      },
      {
        "type": "path",
        "label": "Connecting areas",
        "x": 49,
        "y": 46,
        "w": 4,
        "h": 11,
        "description": "Connecting areas",
        "points": [
          [
            48,
            51
          ],
          [
            53,
            51
          ]
        ]
      }
    ],
    "food": [
      {
        "label": "Fruit and vegetables",
        "source": "Fruit orchard"
      },
      {
        "label": "Grapes",
        "source": "Grape vines"
      },
      {
        "label": "Lettuce",
        "source": "Lettuce bed"
      },
      {
        "label": "Milk",
        "source": "Cow enclosure"
      },
      {
        "label": "Honey",
        "source": "Bee hive"
      }
    ],
    "fibre": [
      {
        "label": "Wool",
        "source": "Sheep enclosure"
      },
      {
        "label": "Cotton",
        "source": "Cotton"
      }
    ],
    "note": "Two connected areas form one farm. Food and fibre journeys illustrate how the drawn farm products can be used.",
    "code": "KI"
  },
  {
    "id": "farm-02",
    "title": "Farm S",
    "view": "plan",
    "features": [
      {
        "type": "house",
        "label": "Farmhouse",
        "x": 8,
        "y": 53,
        "w": 20,
        "h": 21,
        "description": "Farmhouse",
        "color": "#e8d8b6"
      },
      {
        "type": "house",
        "label": "Small house",
        "x": 54,
        "y": 3,
        "w": 13,
        "h": 16,
        "description": "Small house",
        "color": "#dbd2b1"
      },
      {
        "type": "pond",
        "label": "Pond",
        "x": 61,
        "y": 9,
        "w": 16,
        "h": 15,
        "description": "Pond"
      },
      {
        "type": "animal",
        "label": "Upper sheep paddock",
        "x": 20,
        "y": 5,
        "w": 23,
        "h": 28,
        "description": "Upper sheep paddock",
        "kind": "sheep",
        "product": "Wool"
      },
      {
        "type": "animal",
        "label": "Cow paddock",
        "x": 44,
        "y": 20,
        "w": 18,
        "h": 24,
        "description": "Cow paddock",
        "kind": "cow",
        "product": "Milk"
      },
      {
        "type": "animal",
        "label": "Dog paddock",
        "x": 60,
        "y": 22,
        "w": 16,
        "h": 26,
        "description": "Dog paddock",
        "kind": "dog"
      },
      {
        "type": "animal",
        "label": "Pig paddock",
        "x": 31,
        "y": 33,
        "w": 15,
        "h": 19,
        "description": "Pig paddock",
        "kind": "pig"
      },
      {
        "type": "animal",
        "label": "Lower sheep paddock",
        "x": 31,
        "y": 57,
        "w": 43,
        "h": 21,
        "description": "Lower sheep paddock",
        "kind": "sheep",
        "product": "Wool"
      },
      {
        "type": "crop",
        "label": "Wheat",
        "x": 24,
        "y": 80,
        "w": 53,
        "h": 14,
        "description": "Wheat",
        "kind": "wheat",
        "product": "Wheat"
      },
      {
        "type": "flower",
        "label": "Sunflowers",
        "x": 74,
        "y": 49,
        "w": 12,
        "h": 39,
        "description": "Sunflowers",
        "kind": "sunflower",
        "product": "Sunflower seeds"
      },
      {
        "type": "worm",
        "label": "Long worm farm",
        "x": 89,
        "y": 25,
        "w": 8,
        "h": 55,
        "description": "Long worm farm"
      },
      {
        "type": "tank",
        "label": "North-west tank",
        "x": 4,
        "y": 12,
        "w": 6,
        "h": 13,
        "description": "North-west tank"
      },
      {
        "type": "tank",
        "label": "North-east tank",
        "x": 93,
        "y": 10,
        "w": 5,
        "h": 11,
        "description": "North-east tank"
      },
      {
        "type": "tank",
        "label": "South-west tank",
        "x": 9,
        "y": 87,
        "w": 7,
        "h": 11,
        "description": "South-west tank"
      },
      {
        "type": "tank",
        "label": "South-east tank",
        "x": 89,
        "y": 81,
        "w": 6,
        "h": 12,
        "description": "South-east tank"
      },
      {
        "type": "habitat",
        "label": "Corner owl houses",
        "x": 1,
        "y": 1,
        "w": 5,
        "h": 7,
        "description": "Corner owl houses",
        "kind": "owlhouse"
      },
      {
        "type": "habitat",
        "label": "Upper owl house",
        "x": 93,
        "y": 1,
        "w": 6,
        "h": 8,
        "description": "Upper owl house",
        "kind": "owlhouse"
      },
      {
        "type": "habitat",
        "label": "Lower owl house",
        "x": 94,
        "y": 91,
        "w": 6,
        "h": 8,
        "description": "Lower owl house",
        "kind": "owlhouse"
      },
      {
        "type": "path",
        "label": "Red farm paths",
        "x": 0,
        "y": 0,
        "w": 100,
        "h": 100,
        "description": "Red farm paths",
        "points": [
          [
            3,
            5
          ],
          [
            27,
            50
          ],
          [
            30,
            72
          ],
          [
            12,
            93
          ],
          [
            76,
            96
          ],
          [
            91,
            84
          ],
          [
            88,
            39
          ],
          [
            96,
            13
          ]
        ],
        "color": "#b25c4c"
      }
    ],
    "food": [
      {
        "label": "Wheat",
        "source": "Wheat"
      },
      {
        "label": "Sunflower seeds",
        "source": "Sunflowers"
      },
      {
        "label": "Milk",
        "source": "Cow paddock"
      }
    ],
    "fibre": [
      {
        "label": "Wool",
        "source": "Upper sheep paddock"
      }
    ],
    "note": "The coloured paths connect a patchwork of paddocks, crops and water storage. Dogs are farm companions, not produce.",
    "code": "S"
  },
  {
    "id": "farm-03",
    "title": "Farm R",
    "view": "plan",
    "features": [
      {
        "type": "house",
        "label": "Solar house",
        "x": 31,
        "y": 0,
        "w": 15,
        "h": 10,
        "description": "Solar house",
        "color": "#cbe49c"
      },
      {
        "type": "solar",
        "label": "Roof solar panels",
        "x": 34,
        "y": 1,
        "w": 10,
        "h": 6,
        "description": "Roof solar panels"
      },
      {
        "type": "pipe",
        "label": "Rain and drip line",
        "x": 0,
        "y": 8,
        "w": 100,
        "h": 20,
        "description": "Rain and drip line",
        "points": [
          [
            0,
            8
          ],
          [
            25,
            12
          ],
          [
            50,
            15
          ],
          [
            75,
            20
          ],
          [
            99,
            28
          ]
        ]
      },
      {
        "type": "tree",
        "label": "Bee tree",
        "x": 1,
        "y": 10,
        "w": 7,
        "h": 13,
        "description": "Bee tree",
        "kind": "hive"
      },
      {
        "type": "beehive",
        "label": "Bee hive",
        "x": 3,
        "y": 14,
        "w": 3,
        "h": 5,
        "description": "Bee hive"
      },
      {
        "type": "pond",
        "label": "Pond around bean bed",
        "x": 21,
        "y": 17,
        "w": 52,
        "h": 52,
        "description": "Pond around bean bed",
        "kind": "ring"
      },
      {
        "type": "crop",
        "label": "Giant bean vines",
        "x": 29,
        "y": 26,
        "w": 37,
        "h": 35,
        "description": "Giant bean vines",
        "kind": "beans",
        "product": "Beans",
        "color": "#bd5a42"
      },
      {
        "type": "habitat",
        "label": "Owl houses",
        "x": 61,
        "y": 4,
        "w": 14,
        "h": 12,
        "description": "Owl houses",
        "kind": "owlhouse"
      },
      {
        "type": "compost",
        "label": "Blue compost grinder",
        "x": 76,
        "y": 42,
        "w": 19,
        "h": 29,
        "description": "Blue compost grinder",
        "kind": "grinder",
        "color": "#2d96d8"
      },
      {
        "type": "habitat",
        "label": "Bird bath",
        "x": 95,
        "y": 54,
        "w": 4,
        "h": 18,
        "description": "Bird bath",
        "kind": "birdbath"
      },
      {
        "type": "flower",
        "label": "Long flower garden",
        "x": 18,
        "y": 75,
        "w": 66,
        "h": 24,
        "description": "Long flower garden",
        "color": "#d99ca8"
      },
      {
        "type": "truck",
        "label": "Farm vehicle",
        "x": 1,
        "y": 69,
        "w": 16,
        "h": 29,
        "description": "Farm vehicle"
      },
      {
        "type": "pipe",
        "label": "Pond water route",
        "x": 48,
        "y": 5,
        "w": 14,
        "h": 11,
        "description": "Pond water route",
        "points": [
          [
            48,
            19
          ],
          [
            50,
            7
          ],
          [
            44,
            7
          ]
        ]
      }
    ],
    "food": [
      {
        "label": "Beans",
        "source": "Giant bean vines"
      }
    ],
    "fibre": [],
    "note": "A fantasy-scale bean bed, pond and compost grinder. Pond water is not shown as drinking water; treatment would be needed.",
    "code": "R"
  },
  {
    "id": "farm-04",
    "title": "Farm Sr",
    "view": "side",
    "features": [
      {
        "type": "barn",
        "label": "Red barn",
        "x": 1,
        "y": 28,
        "w": 25,
        "h": 61,
        "description": "Red barn",
        "color": "#ef5349",
        "roof": "#a56e46"
      },
      {
        "type": "tank",
        "label": "Rainwater tank",
        "x": 25,
        "y": 71,
        "w": 7,
        "h": 20,
        "description": "Rainwater tank"
      },
      {
        "type": "flower",
        "label": "Flower beside tank",
        "x": 32,
        "y": 76,
        "w": 3,
        "h": 15,
        "description": "Flower beside tank",
        "color": "#f4a0be"
      },
      {
        "type": "truck",
        "label": "Waste tractor",
        "x": 36,
        "y": 73,
        "w": 20,
        "h": 18,
        "description": "Waste tractor",
        "kind": "tractor",
        "color": "#d88a3f"
      },
      {
        "type": "other",
        "label": "Curved bridge",
        "x": 60,
        "y": 76,
        "w": 29,
        "h": 17,
        "description": "Curved bridge",
        "kind": "bridge",
        "color": "#a96e45"
      },
      {
        "type": "pond",
        "label": "Duck pond",
        "x": 65,
        "y": 90,
        "w": 15,
        "h": 9,
        "description": "Duck pond"
      },
      {
        "type": "animal",
        "label": "Cow on the bridge",
        "x": 66,
        "y": 58,
        "w": 18,
        "h": 19,
        "description": "Cow on the bridge",
        "kind": "cow",
        "product": "Milk"
      },
      {
        "type": "animal",
        "label": "Duck",
        "x": 69,
        "y": 84,
        "w": 5,
        "h": 7,
        "description": "Duck",
        "kind": "duck"
      },
      {
        "type": "habitat",
        "label": "Bird bath",
        "x": 78,
        "y": 83,
        "w": 6,
        "h": 9,
        "description": "Bird bath",
        "kind": "birdbath"
      },
      {
        "type": "habitat",
        "label": "Ladybird",
        "x": 91,
        "y": 88,
        "w": 5,
        "h": 4,
        "description": "Ladybird",
        "kind": "ladybird"
      },
      {
        "type": "pipe",
        "label": "Ground drip line",
        "x": 25,
        "y": 91,
        "w": 43,
        "h": 6,
        "description": "Ground drip line",
        "points": [
          [
            25,
            84
          ],
          [
            25,
            95
          ],
          [
            67,
            95
          ]
        ]
      }
    ],
    "food": [
      {
        "label": "Milk",
        "source": "Cow on the bridge"
      }
    ],
    "fibre": [],
    "note": "A side-view farm. Milk is an example product from the cow. The tractor moves suitable scraps for reuse.",
    "code": "Sr"
  },
  {
    "id": "farm-05",
    "title": "Farm AH",
    "view": "plan",
    "features": [
      {
        "type": "house",
        "label": "Farmhouse",
        "x": 7,
        "y": 3,
        "w": 14,
        "h": 32,
        "description": "Farmhouse",
        "color": "#e3d8ba"
      },
      {
        "type": "path",
        "label": "House steps",
        "x": 11,
        "y": 35,
        "w": 4,
        "h": 14,
        "description": "House steps",
        "kind": "ladder"
      },
      {
        "type": "crop",
        "label": "Wheat bed",
        "x": 20,
        "y": 39,
        "w": 35,
        "h": 14,
        "description": "Wheat bed",
        "kind": "wheat",
        "product": "Wheat"
      },
      {
        "type": "tank",
        "label": "Water tank",
        "x": 68,
        "y": 5,
        "w": 10,
        "h": 25,
        "description": "Water tank"
      },
      {
        "type": "tree",
        "label": "Apple tree",
        "x": 79,
        "y": 27,
        "w": 16,
        "h": 40,
        "description": "Apple tree",
        "kind": "apple",
        "product": "Apples"
      },
      {
        "type": "worm",
        "label": "Worm farm",
        "x": 22,
        "y": 77,
        "w": 23,
        "h": 16,
        "description": "Worm farm"
      },
      {
        "type": "pipe",
        "label": "Drip line to wheat",
        "x": 55,
        "y": 29,
        "w": 14,
        "h": 20,
        "description": "Drip line to wheat",
        "points": [
          [
            69,
            29
          ],
          [
            64,
            39
          ],
          [
            55,
            48
          ]
        ]
      },
      {
        "type": "pipe",
        "label": "Drip line to apple tree",
        "x": 77,
        "y": 29,
        "w": 8,
        "h": 35,
        "description": "Drip line to apple tree",
        "points": [
          [
            77,
            29
          ],
          [
            81,
            47
          ],
          [
            85,
            64
          ]
        ]
      }
    ],
    "food": [
      {
        "label": "Wheat for flour",
        "source": "Wheat bed"
      },
      {
        "label": "Apples",
        "source": "Apple tree"
      }
    ],
    "fibre": [],
    "note": "The wheat bed, apple tree, tank and worm farm work together in this spacious design.",
    "code": "AH"
  },
  {
    "id": "farm-06",
    "title": "Farm MH",
    "view": "plan",
    "features": [
      {
        "type": "truck",
        "label": "Farm truck",
        "x": 0,
        "y": 1,
        "w": 12,
        "h": 9,
        "description": "Farm truck"
      },
      {
        "type": "truck",
        "label": "Farm car",
        "x": 15,
        "y": 3,
        "w": 10,
        "h": 7,
        "description": "Farm car",
        "kind": "car",
        "color": "#c779c9"
      },
      {
        "type": "house",
        "label": "Farmhouse",
        "x": 16,
        "y": 14,
        "w": 27,
        "h": 24,
        "description": "Farmhouse",
        "color": "#f2dfd4"
      },
      {
        "type": "animal",
        "label": "Cow enclosure",
        "x": 0,
        "y": 23,
        "w": 15,
        "h": 20,
        "description": "Cow enclosure",
        "kind": "cow",
        "product": "Milk"
      },
      {
        "type": "pond",
        "label": "Pond and pump",
        "x": 0,
        "y": 46,
        "w": 10,
        "h": 17,
        "description": "Pond and pump"
      },
      {
        "type": "tank",
        "label": "Tank beside house",
        "x": 45,
        "y": 22,
        "w": 5,
        "h": 8,
        "description": "Tank beside house"
      },
      {
        "type": "pipe",
        "label": "Pond pump pipe",
        "x": 8,
        "y": 29,
        "w": 40,
        "h": 23,
        "description": "Pond pump pipe",
        "points": [
          [
            8,
            51
          ],
          [
            27,
            36
          ],
          [
            45,
            31
          ],
          [
            47,
            27
          ]
        ]
      },
      {
        "type": "solar",
        "label": "Solar panels",
        "x": 49,
        "y": 13,
        "w": 10,
        "h": 12,
        "description": "Solar panels"
      },
      {
        "type": "barn",
        "label": "Purple shed",
        "x": 60,
        "y": 11,
        "w": 9,
        "h": 20,
        "description": "Purple shed",
        "color": "#b875c7",
        "roof": "#d68352"
      },
      {
        "type": "habitat",
        "label": "Bird houses",
        "x": 79,
        "y": 8,
        "w": 12,
        "h": 20,
        "description": "Bird houses",
        "kind": "birdhouse"
      },
      {
        "type": "truck",
        "label": "Tractor",
        "x": 46,
        "y": 34,
        "w": 10,
        "h": 9,
        "description": "Tractor",
        "kind": "tractor",
        "color": "#d65852"
      },
      {
        "type": "crop",
        "label": "Cotton patch",
        "x": 35,
        "y": 48,
        "w": 20,
        "h": 23,
        "description": "Cotton patch",
        "kind": "cotton",
        "product": "Cotton"
      },
      {
        "type": "crop",
        "label": "Wheat field",
        "x": 26,
        "y": 77,
        "w": 42,
        "h": 16,
        "description": "Wheat field",
        "kind": "wheat",
        "product": "Wheat"
      },
      {
        "type": "flower",
        "label": "Flower field",
        "x": 4,
        "y": 52,
        "w": 25,
        "h": 40,
        "description": "Flower field",
        "color": "#cf7bb5"
      },
      {
        "type": "tree",
        "label": "Apple tree",
        "x": 59,
        "y": 44,
        "w": 15,
        "h": 31,
        "description": "Apple tree",
        "kind": "apple",
        "product": "Apples"
      },
      {
        "type": "tree",
        "label": "Banana tree",
        "x": 74,
        "y": 31,
        "w": 22,
        "h": 44,
        "description": "Banana tree",
        "kind": "banana",
        "product": "Bananas"
      },
      {
        "type": "beehive",
        "label": "Tree hive",
        "x": 78,
        "y": 60,
        "w": 4,
        "h": 7,
        "description": "Tree hive",
        "product": "Honey"
      },
      {
        "type": "habitat",
        "label": "Bird baths",
        "x": 75,
        "y": 82,
        "w": 14,
        "h": 14,
        "description": "Bird baths",
        "kind": "birdbath"
      }
    ],
    "food": [
      {
        "label": "Wheat",
        "source": "Wheat field"
      },
      {
        "label": "Apples",
        "source": "Apple tree"
      },
      {
        "label": "Bananas",
        "source": "Banana tree"
      },
      {
        "label": "Milk",
        "source": "Cow enclosure"
      },
      {
        "label": "Honey",
        "source": "Tree hive"
      }
    ],
    "fibre": [
      {
        "label": "Cotton",
        "source": "Cotton patch"
      }
    ],
    "note": "",
    "code": "MH"
  },
  {
    "id": "farm-07",
    "title": "Farm LA",
    "view": "plan",
    "features": [
      {
        "type": "barn",
        "label": "Red barn",
        "x": 6,
        "y": 8,
        "w": 26,
        "h": 28,
        "description": "Red barn",
        "color": "#da5658"
      },
      {
        "type": "tank",
        "label": "Barn rain tank",
        "x": 1,
        "y": 19,
        "w": 5,
        "h": 12,
        "description": "Barn rain tank"
      },
      {
        "type": "bin",
        "label": "Waste bin",
        "x": 1,
        "y": 4,
        "w": 6,
        "h": 8,
        "description": "Waste bin",
        "color": "#d14e55"
      },
      {
        "type": "beehive",
        "label": "Three beehives",
        "x": 34,
        "y": 9,
        "w": 20,
        "h": 9,
        "description": "Three beehives",
        "count": 3,
        "product": "Honey"
      },
      {
        "type": "flower",
        "label": "Curved flower bed",
        "x": 33,
        "y": 18,
        "w": 27,
        "h": 17,
        "description": "Curved flower bed",
        "color": "#cf7bb8"
      },
      {
        "type": "pipe",
        "label": "Flower drip line",
        "x": 34,
        "y": 19,
        "w": 26,
        "h": 16,
        "description": "Flower drip line",
        "points": [
          [
            34,
            32
          ],
          [
            44,
            30
          ],
          [
            51,
            26
          ],
          [
            57,
            20
          ]
        ]
      },
      {
        "type": "crop",
        "label": "Corn field",
        "x": 88,
        "y": 1,
        "w": 11,
        "h": 25,
        "description": "Corn field",
        "kind": "corn",
        "product": "Corn"
      },
      {
        "type": "animal",
        "label": "Chicken coop one",
        "x": 85,
        "y": 27,
        "w": 14,
        "h": 17,
        "description": "Chicken coop one",
        "kind": "chicken",
        "product": "Eggs"
      },
      {
        "type": "animal",
        "label": "Chicken coop two",
        "x": 85,
        "y": 45,
        "w": 14,
        "h": 16,
        "description": "Chicken coop two",
        "kind": "chicken",
        "product": "Eggs"
      },
      {
        "type": "animal",
        "label": "Sheep enclosure",
        "x": 1,
        "y": 38,
        "w": 19,
        "h": 21,
        "description": "Sheep enclosure",
        "kind": "sheep",
        "product": "Wool"
      },
      {
        "type": "crop",
        "label": "Tomatoes",
        "x": 34,
        "y": 35,
        "w": 20,
        "h": 20,
        "description": "Tomatoes",
        "kind": "tomato",
        "product": "Tomatoes"
      },
      {
        "type": "habitat",
        "label": "Bird bath",
        "x": 55,
        "y": 55,
        "w": 4,
        "h": 7,
        "description": "Bird bath",
        "kind": "birdbath"
      },
      {
        "type": "worm",
        "label": "Worm farm",
        "x": 32,
        "y": 69,
        "w": 5,
        "h": 8,
        "description": "Worm farm"
      },
      {
        "type": "pond",
        "label": "Wildlife pond",
        "x": 36,
        "y": 77,
        "w": 36,
        "h": 23,
        "description": "Wildlife pond",
        "kind": "irregular"
      },
      {
        "type": "tree",
        "label": "Apple and owl area",
        "x": 1,
        "y": 65,
        "w": 25,
        "h": 33,
        "description": "Apple and owl area",
        "kind": "apple",
        "product": "Apples"
      },
      {
        "type": "habitat",
        "label": "Owl shelter",
        "x": 18,
        "y": 76,
        "w": 5,
        "h": 9,
        "description": "Owl shelter",
        "kind": "owlhouse"
      },
      {
        "type": "truck",
        "label": "Green farm vehicle",
        "x": 73,
        "y": 64,
        "w": 13,
        "h": 11,
        "description": "Green farm vehicle",
        "kind": "tractor",
        "color": "#7fac53"
      },
      {
        "type": "habitat",
        "label": "Snake rocks",
        "x": 79,
        "y": 77,
        "w": 20,
        "h": 22,
        "description": "Snake rocks",
        "kind": "snake"
      }
    ],
    "food": [
      {
        "label": "Corn",
        "source": "Corn field"
      },
      {
        "label": "Tomatoes",
        "source": "Tomatoes"
      },
      {
        "label": "Apples",
        "source": "Apple and owl area"
      },
      {
        "label": "Eggs",
        "source": "Chicken coop one"
      },
      {
        "label": "Honey",
        "source": "Three beehives"
      }
    ],
    "fibre": [
      {
        "label": "Wool",
        "source": "Sheep enclosure"
      }
    ],
    "note": "",
    "code": "LA"
  },
  {
    "id": "farm-08",
    "title": "Farm A",
    "view": "side",
    "features": [
      {
        "type": "house",
        "label": "Pink treehouse",
        "x": 55,
        "y": 7,
        "w": 41,
        "h": 61,
        "description": "Pink treehouse",
        "color": "#e854b4",
        "roof": "#5598bb",
        "kind": "treehouse"
      },
      {
        "type": "path",
        "label": "Treehouse ladder",
        "x": 74,
        "y": 65,
        "w": 5,
        "h": 32,
        "description": "Treehouse ladder",
        "kind": "ladder"
      },
      {
        "type": "animal",
        "label": "Chicken run",
        "x": 8,
        "y": 68,
        "w": 34,
        "h": 29,
        "description": "Chicken run",
        "kind": "chicken",
        "product": "Eggs",
        "count": 2
      },
      {
        "type": "tank",
        "label": "Tall blue tank",
        "x": 8,
        "y": 78,
        "w": 5,
        "h": 19,
        "description": "Tall blue tank"
      },
      {
        "type": "tank",
        "label": "Small blue tank",
        "x": 16,
        "y": 90,
        "w": 3,
        "h": 8,
        "description": "Small blue tank"
      },
      {
        "type": "compost",
        "label": "Red compost bin",
        "x": 0,
        "y": 85,
        "w": 7,
        "h": 12,
        "description": "Red compost bin",
        "color": "#cd5947"
      },
      {
        "type": "other",
        "label": "Eggs",
        "x": 40,
        "y": 94,
        "w": 6,
        "h": 4,
        "description": "Eggs",
        "kind": "eggs"
      },
      {
        "type": "crop",
        "label": "Cotton flowers",
        "x": 55,
        "y": 83,
        "w": 11,
        "h": 15,
        "description": "Cotton flowers",
        "kind": "cotton",
        "product": "Cotton"
      },
      {
        "type": "flower",
        "label": "Magenta flowers",
        "x": 81,
        "y": 69,
        "w": 14,
        "h": 28,
        "description": "Magenta flowers",
        "color": "#d850a0"
      },
      {
        "type": "habitat",
        "label": "Bird bath",
        "x": 51,
        "y": 68,
        "w": 7,
        "h": 6,
        "description": "Bird bath",
        "kind": "birdbath"
      }
    ],
    "food": [
      {
        "label": "Eggs",
        "source": "Chicken run"
      }
    ],
    "fibre": [
      {
        "label": "Cotton for thread",
        "source": "Cotton flowers"
      }
    ],
    "note": "Cotton becomes fibre. The chicken run produces eggs; flowers are not shown as food.",
    "code": "A"
  },
  {
    "id": "farm-09",
    "title": "Farm A2",
    "view": "plan",
    "features": [
      {
        "type": "house",
        "label": "Pink farmhouse",
        "x": 12,
        "y": 1,
        "w": 29,
        "h": 36,
        "description": "Pink farmhouse",
        "color": "#eb8cce",
        "roof": "#8cbd55"
      },
      {
        "type": "compost",
        "label": "Purple compost bin",
        "x": 0,
        "y": 24,
        "w": 12,
        "h": 15,
        "description": "Purple compost bin",
        "color": "#9160bf"
      },
      {
        "type": "crop",
        "label": "Drip-watered crop plot",
        "x": 51,
        "y": 13,
        "w": 24,
        "h": 25,
        "description": "Drip-watered crop plot",
        "kind": "barley",
        "product": "Barley"
      },
      {
        "type": "solar",
        "label": "Solar panels",
        "x": 54,
        "y": 3,
        "w": 8,
        "h": 10,
        "description": "Solar panels"
      },
      {
        "type": "tank",
        "label": "Rainwater tank",
        "x": 82,
        "y": 4,
        "w": 10,
        "h": 15,
        "description": "Rainwater tank"
      },
      {
        "type": "habitat",
        "label": "Right owl houses",
        "x": 79,
        "y": 19,
        "w": 16,
        "h": 22,
        "description": "Right owl houses",
        "kind": "owlhouse"
      },
      {
        "type": "habitat",
        "label": "Left owl houses",
        "x": 10,
        "y": 44,
        "w": 18,
        "h": 31,
        "description": "Left owl houses",
        "kind": "owlhouse"
      },
      {
        "type": "pond",
        "label": "Narrow pond",
        "x": 94,
        "y": 35,
        "w": 6,
        "h": 37,
        "description": "Narrow pond"
      },
      {
        "type": "animal",
        "label": "Cow enclosure",
        "x": 31,
        "y": 45,
        "w": 32,
        "h": 33,
        "description": "Cow enclosure",
        "kind": "cow",
        "product": "Milk"
      },
      {
        "type": "animal",
        "label": "Sheep enclosure",
        "x": 65,
        "y": 41,
        "w": 28,
        "h": 20,
        "description": "Sheep enclosure",
        "kind": "sheep",
        "product": "Wool"
      },
      {
        "type": "crop",
        "label": "Oats field",
        "x": 0,
        "y": 82,
        "w": 32,
        "h": 17,
        "description": "Oats field",
        "kind": "oats",
        "product": "Oats"
      },
      {
        "type": "crop",
        "label": "Wheat field",
        "x": 63,
        "y": 76,
        "w": 31,
        "h": 23,
        "description": "Wheat field",
        "kind": "wheat",
        "product": "Wheat"
      },
      {
        "type": "barn",
        "label": "Red farm shed",
        "x": 45,
        "y": 82,
        "w": 10,
        "h": 17,
        "description": "Red farm shed",
        "color": "#dc5668",
        "roof": "#e7bb58"
      },
      {
        "type": "flower",
        "label": "Flower pots",
        "x": 44,
        "y": 31,
        "w": 8,
        "h": 9,
        "description": "Flower pots",
        "color": "#aa77b8"
      },
      {
        "type": "habitat",
        "label": "Bird baths",
        "x": 33,
        "y": 35,
        "w": 12,
        "h": 9,
        "description": "Bird baths",
        "kind": "birdbath"
      },
      {
        "type": "flower",
        "label": "More flower pots",
        "x": 63,
        "y": 69,
        "w": 7,
        "h": 7,
        "description": "More flower pots",
        "color": "#bc8acb"
      },
      {
        "type": "pipe",
        "label": "Tank drip supply",
        "x": 73,
        "y": 19,
        "w": 12,
        "h": 16,
        "description": "Tank drip supply",
        "points": [
          [
            85,
            19
          ],
          [
            77,
            25
          ],
          [
            73,
            35
          ]
        ]
      }
    ],
    "food": [
      {
        "label": "Oats",
        "source": "Oats field"
      },
      {
        "label": "Wheat",
        "source": "Wheat field"
      },
      {
        "label": "Barley",
        "source": "Drip-watered crop plot"
      },
      {
        "label": "Milk",
        "source": "Cow enclosure"
      }
    ],
    "fibre": [
      {
        "label": "Wool for yarn",
        "source": "Sheep enclosure"
      }
    ],
    "note": "",
    "code": "A2"
  },
  {
    "id": "farm-10",
    "title": "Farm NE",
    "view": "plan",
    "features": [
      {
        "type": "house",
        "label": "Striped farmhouse",
        "x": 1,
        "y": 3,
        "w": 31,
        "h": 24,
        "description": "Striped farmhouse",
        "color": "#e9c857",
        "color2": "#d94e4e",
        "kind": "striped"
      },
      {
        "type": "tank",
        "label": "Broad turquoise tank",
        "x": 33,
        "y": 1,
        "w": 29,
        "h": 23,
        "description": "Broad turquoise tank",
        "color": "#42b6cb",
        "roof": "#8bb96d"
      },
      {
        "type": "crop",
        "label": "Upper garden bed",
        "x": 62,
        "y": 2,
        "w": 19,
        "h": 8,
        "description": "Upper garden bed",
        "kind": "garden"
      },
      {
        "type": "truck",
        "label": "Yellow tractor",
        "x": 61,
        "y": 18,
        "w": 9,
        "h": 10,
        "description": "Yellow tractor",
        "kind": "tractor",
        "color": "#e2c348"
      },
      {
        "type": "pond",
        "label": "Long pond",
        "x": 3,
        "y": 33,
        "w": 15,
        "h": 39,
        "description": "Long pond"
      },
      {
        "type": "pond",
        "label": "Frog pond",
        "x": 32,
        "y": 34,
        "w": 20,
        "h": 28,
        "description": "Frog pond",
        "kind": "frog"
      },
      {
        "type": "compost",
        "label": "Food scrap bowl",
        "x": 53,
        "y": 43,
        "w": 10,
        "h": 20,
        "description": "Food scrap bowl",
        "kind": "bowl"
      },
      {
        "type": "animal",
        "label": "Chicken and rooster enclosure",
        "x": 65,
        "y": 42,
        "w": 27,
        "h": 27,
        "description": "Chicken and rooster enclosure",
        "kind": "chicken",
        "product": "Eggs"
      },
      {
        "type": "crop",
        "label": "Carrots",
        "x": 11,
        "y": 94,
        "w": 26,
        "h": 6,
        "description": "Carrots",
        "kind": "carrot",
        "product": "Carrots"
      },
      {
        "type": "crop",
        "label": "Broccoli",
        "x": 55,
        "y": 91,
        "w": 21,
        "h": 9,
        "description": "Broccoli",
        "kind": "broccoli",
        "product": "Broccoli"
      },
      {
        "type": "tree",
        "label": "Cherry trees",
        "x": 69,
        "y": 75,
        "w": 18,
        "h": 23,
        "description": "Cherry trees",
        "kind": "cherry",
        "product": "Cherries"
      },
      {
        "type": "beehive",
        "label": "Tree hive",
        "x": 81,
        "y": 92,
        "w": 3,
        "h": 6,
        "description": "Tree hive"
      },
      {
        "type": "flower",
        "label": "Small flowers",
        "x": 88,
        "y": 93,
        "w": 7,
        "h": 6,
        "description": "Small flowers",
        "color": "#e8cb67"
      },
      {
        "type": "pipe",
        "label": "Water to garden",
        "x": 11,
        "y": 68,
        "w": 51,
        "h": 27,
        "description": "Water to garden",
        "points": [
          [
            11,
            69
          ],
          [
            5,
            77
          ],
          [
            5,
            94
          ],
          [
            37,
            94
          ]
        ],
        "color": "#51685c"
      }
    ],
    "food": [
      {
        "label": "Carrots",
        "source": "Carrots"
      },
      {
        "label": "Broccoli",
        "source": "Broccoli"
      },
      {
        "label": "Cherries",
        "source": "Cherry trees"
      },
      {
        "label": "Eggs",
        "source": "Chicken and rooster enclosure"
      }
    ],
    "fibre": [],
    "note": "Suitable clean scraps can be composted. The frog pond is a wildlife habitat.",
    "code": "NE"
  },
  {
    "id": "farm-11",
    "title": "Farm KO",
    "view": "plan",
    "features": [
      {
        "type": "house",
        "label": "Farmhouse",
        "x": 2,
        "y": 2,
        "w": 6,
        "h": 11,
        "description": "Farmhouse",
        "color": "#d987a2"
      },
      {
        "type": "tank",
        "label": "House tank",
        "x": 9,
        "y": 8,
        "w": 3,
        "h": 4,
        "description": "House tank"
      },
      {
        "type": "flower",
        "label": "Sunflower garden",
        "x": 17,
        "y": 2,
        "w": 5,
        "h": 5,
        "description": "Sunflower garden",
        "kind": "sunflower"
      },
      {
        "type": "flower",
        "label": "Poppies",
        "x": 25,
        "y": 2,
        "w": 5,
        "h": 5,
        "description": "Poppies",
        "color": "#e65b61"
      },
      {
        "type": "flower",
        "label": "Roses",
        "x": 17,
        "y": 9,
        "w": 5,
        "h": 5,
        "description": "Roses",
        "color": "#e75c78"
      },
      {
        "type": "flower",
        "label": "Hibiscus",
        "x": 25,
        "y": 9,
        "w": 5,
        "h": 5,
        "description": "Hibiscus",
        "color": "#c69bcf"
      },
      {
        "type": "worm",
        "label": "Worm farm",
        "x": 2,
        "y": 21,
        "w": 14,
        "h": 7,
        "description": "Worm farm"
      },
      {
        "type": "compost",
        "label": "Recycling and compost station",
        "x": 1,
        "y": 31,
        "w": 18,
        "h": 8,
        "description": "Recycling and compost station"
      },
      {
        "type": "barn",
        "label": "Car garage",
        "x": 1,
        "y": 40,
        "w": 20,
        "h": 13,
        "description": "Car garage",
        "color": "#c58a70"
      },
      {
        "type": "truck",
        "label": "Red car",
        "x": 4,
        "y": 43,
        "w": 13,
        "h": 7,
        "description": "Red car",
        "kind": "car",
        "color": "#d2544c"
      },
      {
        "type": "habitat",
        "label": "Bird baths",
        "x": 2,
        "y": 66,
        "w": 18,
        "h": 7,
        "description": "Bird baths",
        "kind": "birdbath"
      },
      {
        "type": "tree",
        "label": "Lower-left hive tree",
        "x": 2,
        "y": 81,
        "w": 10,
        "h": 18,
        "description": "Lower-left hive tree",
        "kind": "mango",
        "product": "Mangoes"
      },
      {
        "type": "beehive",
        "label": "Lower-left hive",
        "x": 8,
        "y": 90,
        "w": 3,
        "h": 6,
        "description": "Lower-left hive",
        "product": "Honey"
      },
      {
        "type": "animal",
        "label": "Guard dog kennel",
        "x": 19,
        "y": 82,
        "w": 10,
        "h": 15,
        "description": "Guard dog kennel",
        "kind": "dog"
      },
      {
        "type": "animal",
        "label": "Cow pen",
        "x": 29,
        "y": 94,
        "w": 18,
        "h": 6,
        "description": "Cow pen",
        "kind": "cow",
        "product": "Milk"
      },
      {
        "type": "animal",
        "label": "Sheep pen",
        "x": 47,
        "y": 82,
        "w": 15,
        "h": 18,
        "description": "Sheep pen",
        "kind": "sheep",
        "product": "Wool"
      },
      {
        "type": "truck",
        "label": "Farm tractor",
        "x": 66,
        "y": 92,
        "w": 8,
        "h": 7,
        "description": "Farm tractor",
        "kind": "tractor",
        "color": "#7dabad"
      },
      {
        "type": "solar",
        "label": "Solar panels",
        "x": 43,
        "y": 23,
        "w": 10,
        "h": 14,
        "description": "Solar panels"
      },
      {
        "type": "tank",
        "label": "Large rain tank",
        "x": 68,
        "y": 3,
        "w": 10,
        "h": 20,
        "description": "Large rain tank"
      },
      {
        "type": "tree",
        "label": "Upper-right hive tree",
        "x": 89,
        "y": 2,
        "w": 9,
        "h": 18,
        "description": "Upper-right hive tree",
        "kind": "apple",
        "product": "Apples"
      },
      {
        "type": "beehive",
        "label": "Upper-right hive",
        "x": 95,
        "y": 11,
        "w": 3,
        "h": 5,
        "description": "Upper-right hive",
        "product": "Honey"
      },
      {
        "type": "tree",
        "label": "Lower-right hive tree",
        "x": 88,
        "y": 78,
        "w": 11,
        "h": 22,
        "description": "Lower-right hive tree",
        "kind": "mango",
        "product": "Mangoes"
      },
      {
        "type": "beehive",
        "label": "Lower-right hive",
        "x": 95,
        "y": 89,
        "w": 3,
        "h": 6,
        "description": "Lower-right hive",
        "product": "Honey"
      },
      {
        "type": "fence",
        "label": "Upper gate",
        "x": 85,
        "y": 35,
        "w": 15,
        "h": 7,
        "description": "Upper gate"
      },
      {
        "type": "fence",
        "label": "Lower gate",
        "x": 84,
        "y": 56,
        "w": 16,
        "h": 6,
        "description": "Lower gate"
      },
      {
        "type": "pipe",
        "label": "Underground supply",
        "x": 22,
        "y": 10,
        "w": 68,
        "h": 73,
        "description": "Underground supply",
        "points": [
          [
            22,
            82
          ],
          [
            45,
            56
          ],
          [
            70,
            20
          ],
          [
            69,
            10
          ],
          [
            31,
            10
          ]
        ]
      },
      {
        "type": "habitat",
        "label": "Owl houses",
        "x": 23,
        "y": 16,
        "w": 15,
        "h": 12,
        "description": "Owl houses",
        "kind": "owlhouse"
      }
    ],
    "food": [
      {
        "label": "Honey",
        "source": "Upper-right hive"
      },
      {
        "label": "Mangoes",
        "source": "Lower-left hive tree"
      },
      {
        "label": "Apples",
        "source": "Upper-right hive tree"
      },
      {
        "label": "Milk",
        "source": "Cow pen"
      }
    ],
    "fibre": [
      {
        "label": "Wool",
        "source": "Sheep pen"
      }
    ],
    "note": "Long underground pipes connect the tank to growing areas. The open lawn and gates remain part of the design.",
    "code": "KO"
  },
  {
    "id": "farm-12",
    "title": "Farm I",
    "view": "plan",
    "features": [
      {
        "type": "tank",
        "label": "Rainwater tank",
        "x": 0,
        "y": 17,
        "w": 14,
        "h": 32,
        "description": "Rainwater tank"
      },
      {
        "type": "crop",
        "label": "Grape trellis",
        "x": 19,
        "y": 39,
        "w": 15,
        "h": 15,
        "description": "Grape trellis",
        "kind": "grapes",
        "product": "Grapes"
      },
      {
        "type": "tree",
        "label": "Mango tree with nest",
        "x": 26,
        "y": 2,
        "w": 34,
        "h": 43,
        "description": "Mango tree with nest",
        "kind": "mango",
        "product": "Mangoes"
      },
      {
        "type": "habitat",
        "label": "Mango nest",
        "x": 41,
        "y": 4,
        "w": 6,
        "h": 4,
        "description": "Mango nest",
        "kind": "nest"
      },
      {
        "type": "tree",
        "label": "Upper tree",
        "x": 80,
        "y": 3,
        "w": 10,
        "h": 20,
        "description": "Upper tree"
      },
      {
        "type": "tree",
        "label": "Second upper tree",
        "x": 88,
        "y": 11,
        "w": 10,
        "h": 23,
        "description": "Second upper tree"
      },
      {
        "type": "pond",
        "label": "Island pond",
        "x": 56,
        "y": 27,
        "w": 31,
        "h": 27,
        "description": "Island pond",
        "kind": "island"
      },
      {
        "type": "tree",
        "label": "Peach tree with nest",
        "x": 29,
        "y": 68,
        "w": 29,
        "h": 32,
        "description": "Peach tree with nest",
        "kind": "peach",
        "product": "Peaches"
      },
      {
        "type": "habitat",
        "label": "Peach nest",
        "x": 42,
        "y": 68,
        "w": 5,
        "h": 4,
        "description": "Peach nest",
        "kind": "nest"
      },
      {
        "type": "compost",
        "label": "Compost box",
        "x": 81,
        "y": 72,
        "w": 18,
        "h": 28,
        "description": "Compost box"
      },
      {
        "type": "flower",
        "label": "Small flower patch",
        "x": 4,
        "y": 82,
        "w": 11,
        "h": 9,
        "description": "Small flower patch",
        "color": "#e7c8aa"
      }
    ],
    "food": [
      {
        "label": "Grapes",
        "source": "Grape trellis"
      },
      {
        "label": "Mangoes",
        "source": "Mango tree with nest"
      },
      {
        "label": "Peaches",
        "source": "Peach tree with nest"
      }
    ],
    "fibre": [],
    "note": "Fruit trees, nesting places, a pond and compost share a spacious orchard.",
    "code": "I"
  },
  {
    "id": "farm-13",
    "title": "Farm HH",
    "view": "side",
    "features": [
      {
        "type": "tree",
        "label": "Large owl tree",
        "x": 2,
        "y": 22,
        "w": 11,
        "h": 51,
        "description": "Large owl tree"
      },
      {
        "type": "habitat",
        "label": "Owl box",
        "x": 9,
        "y": 51,
        "w": 4,
        "h": 6,
        "description": "Owl box",
        "kind": "owlhouse"
      },
      {
        "type": "helicopter",
        "label": "Farmer transport helicopter",
        "x": 16,
        "y": 7,
        "w": 25,
        "h": 25,
        "description": "Farmer transport helicopter",
        "color": "#777281"
      },
      {
        "type": "barn",
        "label": "Pink barn",
        "x": 45,
        "y": 31,
        "w": 24,
        "h": 39,
        "description": "Pink barn",
        "color": "#d78ac5",
        "roof": "#c98ec0",
        "color2": "#dfc45b"
      },
      {
        "type": "tower",
        "label": "Left water and watch tower",
        "x": 28,
        "y": 37,
        "w": 6,
        "h": 33,
        "description": "Left water and watch tower",
        "color": "#8d87a8"
      },
      {
        "type": "tower",
        "label": "Central water and watch tower",
        "x": 57,
        "y": 8,
        "w": 7,
        "h": 30,
        "description": "Central water and watch tower",
        "color": "#82b2be"
      },
      {
        "type": "tower",
        "label": "Right water and watch tower",
        "x": 76,
        "y": 34,
        "w": 7,
        "h": 34,
        "description": "Right water and watch tower",
        "color": "#c3b76e"
      },
      {
        "type": "tower",
        "label": "Orange water tower",
        "x": 87,
        "y": 44,
        "w": 5,
        "h": 24,
        "description": "Orange water tower",
        "color": "#d89b62"
      },
      {
        "type": "worm",
        "label": "Worm farm",
        "x": 37,
        "y": 64,
        "w": 6,
        "h": 5,
        "description": "Worm farm"
      },
      {
        "type": "compost",
        "label": "Compost bins",
        "x": 67,
        "y": 63,
        "w": 7,
        "h": 6,
        "description": "Compost bins"
      },
      {
        "type": "habitat",
        "label": "Owl home",
        "x": 11,
        "y": 66,
        "w": 5,
        "h": 6,
        "description": "Owl home",
        "kind": "owlhouse"
      }
    ],
    "food": [],
    "fibre": [],
    "note": "Water towers and pest-watch platforms support the farm. The helicopter carries the farmer. Worms recycle scraps into material that helps soil.",
    "code": "HH"
  }
];
