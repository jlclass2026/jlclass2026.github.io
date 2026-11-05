/* 50 fixed Year 3 maths boards: 200 groups and 800 calculation tiles.
 * Answers 10–60; single operations only; operands 2–120.
 * Addition/subtraction, 2–10 times tables (some extension facts), exact division.
 * Division uses only 2, 4, 5 or 10, with dividends at most 100.
 * Division expressions may repeat across boards; each board has 16 unique tiles.
 * Each board contains one multiplication and two division tiles. Every group
 * contains both addition and subtraction, so signs alone cannot identify it.
 * Labels/explanations are answer data: the UI must hide them until solved.
 */
(function(root, factory) {
  const puzzles = factory();
  if (typeof module === 'object' && module.exports) module.exports = puzzles;
  else root.FOUR_MATHS_PUZZLES = puzzles;
})(typeof globalThis !== 'undefined' ? globalThis : this, function() {
  'use strict';
  return [
  {
    "id": "maths-01",
    "title": "Number Connections 01",
    "difficulty": "Year 3",
    "groups": [
      {
        "label": "Equals 20",
        "answer": 20,
        "words": [
          "28 − 8",
          "16 + 4",
          "63 − 43",
          "5 × 4"
        ],
        "hint": "The four expressions share an even answer. Different signs can lead to the same number.",
        "easierHint": "Work out 28 − 8 first. Find three more expressions with that answer.",
        "explanation": "28 − 8 = 20; 16 + 4 = 20; 63 − 43 = 20; 5 × 4 = 20. All four have the same value."
      },
      {
        "label": "Equals 33",
        "answer": 33,
        "words": [
          "85 − 52",
          "8 + 25",
          "16 + 17",
          "88 − 55"
        ],
        "hint": "The four expressions share an odd answer. Different signs can lead to the same number.",
        "easierHint": "Work out 85 − 52 first. Find three more expressions with that answer.",
        "explanation": "85 − 52 = 33; 8 + 25 = 33; 16 + 17 = 33; 88 − 55 = 33. All four have the same value."
      },
      {
        "label": "Equals 14",
        "answer": 14,
        "words": [
          "7 + 7",
          "21 − 7",
          "47 − 33",
          "28 ÷ 2"
        ],
        "hint": "The four expressions share an even answer. Different signs can lead to the same number.",
        "easierHint": "Work out 21 − 7 first. Find three more expressions with that answer.",
        "explanation": "7 + 7 = 14; 21 − 7 = 14; 47 − 33 = 14; 28 ÷ 2 = 14. All four have the same value."
      },
      {
        "label": "Equals 46",
        "answer": 46,
        "words": [
          "57 − 11",
          "90 − 44",
          "92 ÷ 2",
          "18 + 28"
        ],
        "hint": "The four expressions share an even answer. Different signs can lead to the same number.",
        "easierHint": "Work out 57 − 11 first. Find three more expressions with that answer.",
        "explanation": "57 − 11 = 46; 90 − 44 = 46; 92 ÷ 2 = 46; 18 + 28 = 46. All four have the same value."
      }
    ]
  },
  {
    "id": "maths-02",
    "title": "Number Connections 02",
    "difficulty": "Year 3",
    "groups": [
      {
        "label": "Equals 35",
        "answer": 35,
        "words": [
          "7 × 5",
          "62 − 27",
          "30 + 5",
          "16 + 19"
        ],
        "hint": "The four expressions share an odd answer. Different signs can lead to the same number.",
        "easierHint": "Work out 62 − 27 first. Find three more expressions with that answer.",
        "explanation": "7 × 5 = 35; 62 − 27 = 35; 30 + 5 = 35; 16 + 19 = 35. All four have the same value."
      },
      {
        "label": "Equals 10",
        "answer": 10,
        "words": [
          "17 − 7",
          "4 + 6",
          "40 ÷ 4",
          "28 − 18"
        ],
        "hint": "The four expressions share an even answer. Different signs can lead to the same number.",
        "easierHint": "Work out 17 − 7 first. Find three more expressions with that answer.",
        "explanation": "17 − 7 = 10; 4 + 6 = 10; 40 ÷ 4 = 10; 28 − 18 = 10. All four have the same value."
      },
      {
        "label": "Equals 22",
        "answer": 22,
        "words": [
          "44 ÷ 2",
          "75 − 53",
          "13 + 9",
          "3 + 19"
        ],
        "hint": "The four expressions share an even answer. Different signs can lead to the same number.",
        "easierHint": "Work out 75 − 53 first. Find three more expressions with that answer.",
        "explanation": "44 ÷ 2 = 22; 75 − 53 = 22; 13 + 9 = 22; 3 + 19 = 22. All four have the same value."
      },
      {
        "label": "Equals 44",
        "answer": 44,
        "words": [
          "40 + 4",
          "68 − 24",
          "103 − 59",
          "46 − 2"
        ],
        "hint": "The four expressions share an even answer. Different signs can lead to the same number.",
        "easierHint": "Work out 68 − 24 first. Find three more expressions with that answer.",
        "explanation": "40 + 4 = 44; 68 − 24 = 44; 103 − 59 = 44; 46 − 2 = 44. All four have the same value."
      }
    ]
  },
  {
    "id": "maths-03",
    "title": "Number Connections 03",
    "difficulty": "Year 3",
    "groups": [
      {
        "label": "Equals 18",
        "answer": 18,
        "words": [
          "15 + 3",
          "28 − 10",
          "6 × 3",
          "76 − 58"
        ],
        "hint": "The four expressions share an even answer. Different signs can lead to the same number.",
        "easierHint": "Work out 28 − 10 first. Find three more expressions with that answer.",
        "explanation": "15 + 3 = 18; 28 − 10 = 18; 6 × 3 = 18; 76 − 58 = 18. All four have the same value."
      },
      {
        "label": "Equals 19",
        "answer": 19,
        "words": [
          "58 − 39",
          "16 + 3",
          "22 − 3",
          "57 − 38"
        ],
        "hint": "The four expressions share an odd answer. Different signs can lead to the same number.",
        "easierHint": "Work out 58 − 39 first. Find three more expressions with that answer.",
        "explanation": "58 − 39 = 19; 16 + 3 = 19; 22 − 3 = 19; 57 − 38 = 19. All four have the same value."
      },
      {
        "label": "Equals 34",
        "answer": 34,
        "words": [
          "57 − 23",
          "56 − 22",
          "12 + 22",
          "68 ÷ 2"
        ],
        "hint": "The four expressions share an even answer. Different signs can lead to the same number.",
        "easierHint": "Work out 57 − 23 first. Find three more expressions with that answer.",
        "explanation": "57 − 23 = 34; 56 − 22 = 34; 12 + 22 = 34; 68 ÷ 2 = 34. All four have the same value."
      },
      {
        "label": "Equals 30",
        "answer": 30,
        "words": [
          "45 − 15",
          "60 ÷ 2",
          "16 + 14",
          "3 + 27"
        ],
        "hint": "The four expressions share an even answer. Different signs can lead to the same number.",
        "easierHint": "Work out 45 − 15 first. Find three more expressions with that answer.",
        "explanation": "45 − 15 = 30; 60 ÷ 2 = 30; 16 + 14 = 30; 3 + 27 = 30. All four have the same value."
      }
    ]
  },
  {
    "id": "maths-04",
    "title": "Number Connections 04",
    "difficulty": "Year 3",
    "groups": [
      {
        "label": "Equals 28",
        "answer": 28,
        "words": [
          "62 − 34",
          "56 ÷ 2",
          "26 + 2",
          "77 − 49"
        ],
        "hint": "The four expressions share an even answer. Different signs can lead to the same number.",
        "easierHint": "Work out 62 − 34 first. Find three more expressions with that answer.",
        "explanation": "62 − 34 = 28; 56 ÷ 2 = 28; 26 + 2 = 28; 77 − 49 = 28. All four have the same value."
      },
      {
        "label": "Equals 25",
        "answer": 25,
        "words": [
          "5 × 5",
          "15 + 10",
          "22 + 3",
          "47 − 22"
        ],
        "hint": "The four expressions share an odd answer. Different signs can lead to the same number.",
        "easierHint": "Work out 47 − 22 first. Find three more expressions with that answer.",
        "explanation": "5 × 5 = 25; 15 + 10 = 25; 22 + 3 = 25; 47 − 22 = 25. All four have the same value."
      },
      {
        "label": "Equals 43",
        "answer": 43,
        "words": [
          "54 − 11",
          "5 + 38",
          "89 − 46",
          "74 − 31"
        ],
        "hint": "The four expressions share an odd answer. Different signs can lead to the same number.",
        "easierHint": "Work out 54 − 11 first. Find three more expressions with that answer.",
        "explanation": "54 − 11 = 43; 5 + 38 = 43; 89 − 46 = 43; 74 − 31 = 43. All four have the same value."
      },
      {
        "label": "Equals 15",
        "answer": 15,
        "words": [
          "7 + 8",
          "50 − 35",
          "75 − 60",
          "60 ÷ 4"
        ],
        "hint": "The four expressions share an odd answer. Different signs can lead to the same number.",
        "easierHint": "Work out 50 − 35 first. Find three more expressions with that answer.",
        "explanation": "7 + 8 = 15; 50 − 35 = 15; 75 − 60 = 15; 60 ÷ 4 = 15. All four have the same value."
      }
    ]
  },
  {
    "id": "maths-05",
    "title": "Number Connections 05",
    "difficulty": "Year 3",
    "groups": [
      {
        "label": "Equals 35",
        "answer": 35,
        "words": [
          "77 − 42",
          "7 + 28",
          "70 ÷ 2",
          "15 + 20"
        ],
        "hint": "The four expressions share an odd answer. Different signs can lead to the same number.",
        "easierHint": "Work out 77 − 42 first. Find three more expressions with that answer.",
        "explanation": "77 − 42 = 35; 7 + 28 = 35; 70 ÷ 2 = 35; 15 + 20 = 35. All four have the same value."
      },
      {
        "label": "Equals 33",
        "answer": 33,
        "words": [
          "75 − 42",
          "25 + 8",
          "19 + 14",
          "81 − 48"
        ],
        "hint": "The four expressions share an odd answer. Different signs can lead to the same number.",
        "easierHint": "Work out 75 − 42 first. Find three more expressions with that answer.",
        "explanation": "75 − 42 = 33; 25 + 8 = 33; 19 + 14 = 33; 81 − 48 = 33. All four have the same value."
      },
      {
        "label": "Equals 30",
        "answer": 30,
        "words": [
          "32 − 2",
          "28 + 2",
          "5 × 6",
          "77 − 47"
        ],
        "hint": "The four expressions share an even answer. Different signs can lead to the same number.",
        "easierHint": "Work out 32 − 2 first. Find three more expressions with that answer.",
        "explanation": "32 − 2 = 30; 28 + 2 = 30; 5 × 6 = 30; 77 − 47 = 30. All four have the same value."
      },
      {
        "label": "Equals 44",
        "answer": 44,
        "words": [
          "50 − 6",
          "39 + 5",
          "88 ÷ 2",
          "88 − 44"
        ],
        "hint": "The four expressions share an even answer. Different signs can lead to the same number.",
        "easierHint": "Work out 50 − 6 first. Find three more expressions with that answer.",
        "explanation": "50 − 6 = 44; 39 + 5 = 44; 88 ÷ 2 = 44; 88 − 44 = 44. All four have the same value."
      }
    ]
  },
  {
    "id": "maths-06",
    "title": "Number Connections 06",
    "difficulty": "Year 3",
    "groups": [
      {
        "label": "Equals 36",
        "answer": 36,
        "words": [
          "26 + 10",
          "73 − 37",
          "27 + 9",
          "4 × 9"
        ],
        "hint": "The four expressions share an even answer. Different signs can lead to the same number.",
        "easierHint": "Work out 73 − 37 first. Find three more expressions with that answer.",
        "explanation": "26 + 10 = 36; 73 − 37 = 36; 27 + 9 = 36; 4 × 9 = 36. All four have the same value."
      },
      {
        "label": "Equals 12",
        "answer": 12,
        "words": [
          "24 ÷ 2",
          "34 − 22",
          "39 − 27",
          "4 + 8"
        ],
        "hint": "The four expressions share an even answer. Different signs can lead to the same number.",
        "easierHint": "Work out 34 − 22 first. Find three more expressions with that answer.",
        "explanation": "24 ÷ 2 = 12; 34 − 22 = 12; 39 − 27 = 12; 4 + 8 = 12. All four have the same value."
      },
      {
        "label": "Equals 39",
        "answer": 39,
        "words": [
          "8 + 31",
          "90 − 51",
          "51 − 12",
          "97 − 58"
        ],
        "hint": "The four expressions share an odd answer. Different signs can lead to the same number.",
        "easierHint": "Work out 90 − 51 first. Find three more expressions with that answer.",
        "explanation": "8 + 31 = 39; 90 − 51 = 39; 51 − 12 = 39; 97 − 58 = 39. All four have the same value."
      },
      {
        "label": "Equals 31",
        "answer": 31,
        "words": [
          "25 + 6",
          "62 ÷ 2",
          "91 − 60",
          "28 + 3"
        ],
        "hint": "The four expressions share an odd answer. Different signs can lead to the same number.",
        "easierHint": "Work out 91 − 60 first. Find three more expressions with that answer.",
        "explanation": "25 + 6 = 31; 62 ÷ 2 = 31; 91 − 60 = 31; 28 + 3 = 31. All four have the same value."
      }
    ]
  },
  {
    "id": "maths-07",
    "title": "Number Connections 07",
    "difficulty": "Year 3",
    "groups": [
      {
        "label": "Equals 10",
        "answer": 10,
        "words": [
          "33 − 23",
          "100 ÷ 10",
          "12 − 2",
          "5 + 5"
        ],
        "hint": "The four expressions share an even answer. Different signs can lead to the same number.",
        "easierHint": "Work out 33 − 23 first. Find three more expressions with that answer.",
        "explanation": "33 − 23 = 10; 100 ÷ 10 = 10; 12 − 2 = 10; 5 + 5 = 10. All four have the same value."
      },
      {
        "label": "Equals 16",
        "answer": 16,
        "words": [
          "55 − 39",
          "72 − 56",
          "4 × 4",
          "14 + 2"
        ],
        "hint": "The four expressions share an even answer. Different signs can lead to the same number.",
        "easierHint": "Work out 55 − 39 first. Find three more expressions with that answer.",
        "explanation": "55 − 39 = 16; 72 − 56 = 16; 4 × 4 = 16; 14 + 2 = 16. All four have the same value."
      },
      {
        "label": "Equals 31",
        "answer": 31,
        "words": [
          "11 + 20",
          "68 − 37",
          "5 + 26",
          "57 − 26"
        ],
        "hint": "The four expressions share an odd answer. Different signs can lead to the same number.",
        "easierHint": "Work out 68 − 37 first. Find three more expressions with that answer.",
        "explanation": "11 + 20 = 31; 68 − 37 = 31; 5 + 26 = 31; 57 − 26 = 31. All four have the same value."
      },
      {
        "label": "Equals 18",
        "answer": 18,
        "words": [
          "36 − 18",
          "36 ÷ 2",
          "10 + 8",
          "59 − 41"
        ],
        "hint": "The four expressions share an even answer. Different signs can lead to the same number.",
        "easierHint": "Work out 36 − 18 first. Find three more expressions with that answer.",
        "explanation": "36 − 18 = 18; 36 ÷ 2 = 18; 10 + 8 = 18; 59 − 41 = 18. All four have the same value."
      }
    ]
  },
  {
    "id": "maths-08",
    "title": "Number Connections 08",
    "difficulty": "Year 3",
    "groups": [
      {
        "label": "Equals 39",
        "answer": 39,
        "words": [
          "33 + 6",
          "19 + 20",
          "78 ÷ 2",
          "63 − 24"
        ],
        "hint": "The four expressions share an odd answer. Different signs can lead to the same number.",
        "easierHint": "Work out 63 − 24 first. Find three more expressions with that answer.",
        "explanation": "33 + 6 = 39; 19 + 20 = 39; 78 ÷ 2 = 39; 63 − 24 = 39. All four have the same value."
      },
      {
        "label": "Equals 17",
        "answer": 17,
        "words": [
          "30 − 13",
          "53 − 36",
          "10 + 7",
          "34 ÷ 2"
        ],
        "hint": "The four expressions share an odd answer. Different signs can lead to the same number.",
        "easierHint": "Work out 30 − 13 first. Find three more expressions with that answer.",
        "explanation": "30 − 13 = 17; 53 − 36 = 17; 10 + 7 = 17; 34 ÷ 2 = 17. All four have the same value."
      },
      {
        "label": "Equals 18",
        "answer": 18,
        "words": [
          "2 × 9",
          "11 + 7",
          "48 − 30",
          "26 − 8"
        ],
        "hint": "The four expressions share an even answer. Different signs can lead to the same number.",
        "easierHint": "Work out 48 − 30 first. Find three more expressions with that answer.",
        "explanation": "2 × 9 = 18; 11 + 7 = 18; 48 − 30 = 18; 26 − 8 = 18. All four have the same value."
      },
      {
        "label": "Equals 24",
        "answer": 24,
        "words": [
          "69 − 45",
          "10 + 14",
          "66 − 42",
          "76 − 52"
        ],
        "hint": "The four expressions share an even answer. Different signs can lead to the same number.",
        "easierHint": "Work out 69 − 45 first. Find three more expressions with that answer.",
        "explanation": "69 − 45 = 24; 10 + 14 = 24; 66 − 42 = 24; 76 − 52 = 24. All four have the same value."
      }
    ]
  },
  {
    "id": "maths-09",
    "title": "Number Connections 09",
    "difficulty": "Year 3",
    "groups": [
      {
        "label": "Equals 23",
        "answer": 23,
        "words": [
          "36 − 13",
          "13 + 10",
          "46 ÷ 2",
          "27 − 4"
        ],
        "hint": "The four expressions share an odd answer. Different signs can lead to the same number.",
        "easierHint": "Work out 36 − 13 first. Find three more expressions with that answer.",
        "explanation": "36 − 13 = 23; 13 + 10 = 23; 46 ÷ 2 = 23; 27 − 4 = 23. All four have the same value."
      },
      {
        "label": "Equals 29",
        "answer": 29,
        "words": [
          "69 − 40",
          "58 ÷ 2",
          "17 + 12",
          "16 + 13"
        ],
        "hint": "The four expressions share an odd answer. Different signs can lead to the same number.",
        "easierHint": "Work out 69 − 40 first. Find three more expressions with that answer.",
        "explanation": "69 − 40 = 29; 58 ÷ 2 = 29; 17 + 12 = 29; 16 + 13 = 29. All four have the same value."
      },
      {
        "label": "Equals 10",
        "answer": 10,
        "words": [
          "2 × 5",
          "62 − 52",
          "2 + 8",
          "42 − 32"
        ],
        "hint": "The four expressions share an even answer. Different signs can lead to the same number.",
        "easierHint": "Work out 62 − 52 first. Find three more expressions with that answer.",
        "explanation": "2 × 5 = 10; 62 − 52 = 10; 2 + 8 = 10; 42 − 32 = 10. All four have the same value."
      },
      {
        "label": "Equals 41",
        "answer": 41,
        "words": [
          "4 + 37",
          "86 − 45",
          "99 − 58",
          "30 + 11"
        ],
        "hint": "The four expressions share an odd answer. Different signs can lead to the same number.",
        "easierHint": "Work out 86 − 45 first. Find three more expressions with that answer.",
        "explanation": "4 + 37 = 41; 86 − 45 = 41; 99 − 58 = 41; 30 + 11 = 41. All four have the same value."
      }
    ]
  },
  {
    "id": "maths-10",
    "title": "Number Connections 10",
    "difficulty": "Year 3",
    "groups": [
      {
        "label": "Equals 17",
        "answer": 17,
        "words": [
          "40 − 23",
          "65 − 48",
          "85 ÷ 5",
          "2 + 15"
        ],
        "hint": "The four expressions share an odd answer. Different signs can lead to the same number.",
        "easierHint": "Work out 40 − 23 first. Find three more expressions with that answer.",
        "explanation": "40 − 23 = 17; 65 − 48 = 17; 85 ÷ 5 = 17; 2 + 15 = 17. All four have the same value."
      },
      {
        "label": "Equals 32",
        "answer": 32,
        "words": [
          "19 + 13",
          "64 ÷ 2",
          "11 + 21",
          "84 − 52"
        ],
        "hint": "The four expressions share an even answer. Different signs can lead to the same number.",
        "easierHint": "Work out 84 − 52 first. Find three more expressions with that answer.",
        "explanation": "19 + 13 = 32; 64 ÷ 2 = 32; 11 + 21 = 32; 84 − 52 = 32. All four have the same value."
      },
      {
        "label": "Equals 28",
        "answer": 28,
        "words": [
          "41 − 13",
          "23 + 5",
          "4 × 7",
          "20 + 8"
        ],
        "hint": "The four expressions share an even answer. Different signs can lead to the same number.",
        "easierHint": "Work out 41 − 13 first. Find three more expressions with that answer.",
        "explanation": "41 − 13 = 28; 23 + 5 = 28; 4 × 7 = 28; 20 + 8 = 28. All four have the same value."
      },
      {
        "label": "Equals 25",
        "answer": 25,
        "words": [
          "16 + 9",
          "84 − 59",
          "30 − 5",
          "79 − 54"
        ],
        "hint": "The four expressions share an odd answer. Different signs can lead to the same number.",
        "easierHint": "Work out 84 − 59 first. Find three more expressions with that answer.",
        "explanation": "16 + 9 = 25; 84 − 59 = 25; 30 − 5 = 25; 79 − 54 = 25. All four have the same value."
      }
    ]
  },
  {
    "id": "maths-11",
    "title": "Number Connections 11",
    "difficulty": "Year 3",
    "groups": [
      {
        "label": "Equals 16",
        "answer": 16,
        "words": [
          "64 ÷ 4",
          "61 − 45",
          "4 + 12",
          "54 − 38"
        ],
        "hint": "The four expressions share an even answer. Different signs can lead to the same number.",
        "easierHint": "Work out 61 − 45 first. Find three more expressions with that answer.",
        "explanation": "64 ÷ 4 = 16; 61 − 45 = 16; 4 + 12 = 16; 54 − 38 = 16. All four have the same value."
      },
      {
        "label": "Equals 24",
        "answer": 24,
        "words": [
          "81 − 57",
          "6 × 4",
          "12 + 12",
          "38 − 14"
        ],
        "hint": "The four expressions share an even answer. Different signs can lead to the same number.",
        "easierHint": "Work out 81 − 57 first. Find three more expressions with that answer.",
        "explanation": "81 − 57 = 24; 6 × 4 = 24; 12 + 12 = 24; 38 − 14 = 24. All four have the same value."
      },
      {
        "label": "Equals 47",
        "answer": 47,
        "words": [
          "18 + 29",
          "32 + 15",
          "105 − 58",
          "60 − 13"
        ],
        "hint": "The four expressions share an odd answer. Different signs can lead to the same number.",
        "easierHint": "Work out 105 − 58 first. Find three more expressions with that answer.",
        "explanation": "18 + 29 = 47; 32 + 15 = 47; 105 − 58 = 47; 60 − 13 = 47. All four have the same value."
      },
      {
        "label": "Equals 15",
        "answer": 15,
        "words": [
          "5 + 10",
          "30 ÷ 2",
          "62 − 47",
          "59 − 44"
        ],
        "hint": "The four expressions share an odd answer. Different signs can lead to the same number.",
        "easierHint": "Work out 62 − 47 first. Find three more expressions with that answer.",
        "explanation": "5 + 10 = 15; 30 ÷ 2 = 15; 62 − 47 = 15; 59 − 44 = 15. All four have the same value."
      }
    ]
  },
  {
    "id": "maths-12",
    "title": "Number Connections 12",
    "difficulty": "Year 3",
    "groups": [
      {
        "label": "Equals 32",
        "answer": 32,
        "words": [
          "92 − 60",
          "76 − 44",
          "28 + 4",
          "39 − 7"
        ],
        "hint": "The four expressions share an even answer. Different signs can lead to the same number.",
        "easierHint": "Work out 92 − 60 first. Find three more expressions with that answer.",
        "explanation": "92 − 60 = 32; 76 − 44 = 32; 28 + 4 = 32; 39 − 7 = 32. All four have the same value."
      },
      {
        "label": "Equals 21",
        "answer": 21,
        "words": [
          "16 + 5",
          "10 + 11",
          "7 × 3",
          "61 − 40"
        ],
        "hint": "The four expressions share an odd answer. Different signs can lead to the same number.",
        "easierHint": "Work out 61 − 40 first. Find three more expressions with that answer.",
        "explanation": "16 + 5 = 21; 10 + 11 = 21; 7 × 3 = 21; 61 − 40 = 21. All four have the same value."
      },
      {
        "label": "Equals 38",
        "answer": 38,
        "words": [
          "79 − 41",
          "26 + 12",
          "13 + 25",
          "76 ÷ 2"
        ],
        "hint": "The four expressions share an even answer. Different signs can lead to the same number.",
        "easierHint": "Work out 79 − 41 first. Find three more expressions with that answer.",
        "explanation": "79 − 41 = 38; 26 + 12 = 38; 13 + 25 = 38; 76 ÷ 2 = 38. All four have the same value."
      },
      {
        "label": "Equals 22",
        "answer": 22,
        "words": [
          "7 + 15",
          "39 − 17",
          "27 − 5",
          "44 ÷ 2"
        ],
        "hint": "The four expressions share an even answer. Different signs can lead to the same number.",
        "easierHint": "Work out 39 − 17 first. Find three more expressions with that answer.",
        "explanation": "7 + 15 = 22; 39 − 17 = 22; 27 − 5 = 22; 44 ÷ 2 = 22. All four have the same value."
      }
    ]
  },
  {
    "id": "maths-13",
    "title": "Number Connections 13",
    "difficulty": "Year 3",
    "groups": [
      {
        "label": "Equals 49",
        "answer": 49,
        "words": [
          "10 + 39",
          "76 − 27",
          "97 − 48",
          "26 + 23"
        ],
        "hint": "The four expressions share an odd answer. Different signs can lead to the same number.",
        "easierHint": "Work out 76 − 27 first. Find three more expressions with that answer.",
        "explanation": "10 + 39 = 49; 76 − 27 = 49; 97 − 48 = 49; 26 + 23 = 49. All four have the same value."
      },
      {
        "label": "Equals 38",
        "answer": 38,
        "words": [
          "57 − 19",
          "53 − 15",
          "76 ÷ 2",
          "15 + 23"
        ],
        "hint": "The four expressions share an even answer. Different signs can lead to the same number.",
        "easierHint": "Work out 57 − 19 first. Find three more expressions with that answer.",
        "explanation": "57 − 19 = 38; 53 − 15 = 38; 76 ÷ 2 = 38; 15 + 23 = 38. All four have the same value."
      },
      {
        "label": "Equals 21",
        "answer": 21,
        "words": [
          "43 − 22",
          "14 + 7",
          "11 + 10",
          "84 ÷ 4"
        ],
        "hint": "The four expressions share an odd answer. Different signs can lead to the same number.",
        "easierHint": "Work out 43 − 22 first. Find three more expressions with that answer.",
        "explanation": "43 − 22 = 21; 14 + 7 = 21; 11 + 10 = 21; 84 ÷ 4 = 21. All four have the same value."
      },
      {
        "label": "Equals 20",
        "answer": 20,
        "words": [
          "8 + 12",
          "10 × 2",
          "48 − 28",
          "27 − 7"
        ],
        "hint": "The four expressions share an even answer. Different signs can lead to the same number.",
        "easierHint": "Work out 48 − 28 first. Find three more expressions with that answer.",
        "explanation": "8 + 12 = 20; 10 × 2 = 20; 48 − 28 = 20; 27 − 7 = 20. All four have the same value."
      }
    ]
  },
  {
    "id": "maths-14",
    "title": "Number Connections 14",
    "difficulty": "Year 3",
    "groups": [
      {
        "label": "Equals 36",
        "answer": 36,
        "words": [
          "96 − 60",
          "60 − 24",
          "29 + 7",
          "72 − 36"
        ],
        "hint": "The four expressions share an even answer. Different signs can lead to the same number.",
        "easierHint": "Work out 96 − 60 first. Find three more expressions with that answer.",
        "explanation": "96 − 60 = 36; 60 − 24 = 36; 29 + 7 = 36; 72 − 36 = 36. All four have the same value."
      },
      {
        "label": "Equals 37",
        "answer": 37,
        "words": [
          "74 ÷ 2",
          "46 − 9",
          "3 + 34",
          "9 + 28"
        ],
        "hint": "The four expressions share an odd answer. Different signs can lead to the same number.",
        "easierHint": "Work out 46 − 9 first. Find three more expressions with that answer.",
        "explanation": "74 ÷ 2 = 37; 46 − 9 = 37; 3 + 34 = 37; 9 + 28 = 37. All four have the same value."
      },
      {
        "label": "Equals 19",
        "answer": 19,
        "words": [
          "63 − 44",
          "66 − 47",
          "17 + 2",
          "95 ÷ 5"
        ],
        "hint": "The four expressions share an odd answer. Different signs can lead to the same number.",
        "easierHint": "Work out 63 − 44 first. Find three more expressions with that answer.",
        "explanation": "63 − 44 = 19; 66 − 47 = 19; 17 + 2 = 19; 95 ÷ 5 = 19. All four have the same value."
      },
      {
        "label": "Equals 35",
        "answer": 35,
        "words": [
          "25 + 10",
          "3 + 32",
          "5 × 7",
          "88 − 53"
        ],
        "hint": "The four expressions share an odd answer. Different signs can lead to the same number.",
        "easierHint": "Work out 88 − 53 first. Find three more expressions with that answer.",
        "explanation": "25 + 10 = 35; 3 + 32 = 35; 5 × 7 = 35; 88 − 53 = 35. All four have the same value."
      }
    ]
  },
  {
    "id": "maths-15",
    "title": "Number Connections 15",
    "difficulty": "Year 3",
    "groups": [
      {
        "label": "Equals 47",
        "answer": 47,
        "words": [
          "13 + 34",
          "58 − 11",
          "17 + 30",
          "102 − 55"
        ],
        "hint": "The four expressions share an odd answer. Different signs can lead to the same number.",
        "easierHint": "Work out 58 − 11 first. Find three more expressions with that answer.",
        "explanation": "13 + 34 = 47; 58 − 11 = 47; 17 + 30 = 47; 102 − 55 = 47. All four have the same value."
      },
      {
        "label": "Equals 48",
        "answer": 48,
        "words": [
          "96 ÷ 2",
          "26 + 22",
          "57 − 9",
          "27 + 21"
        ],
        "hint": "The four expressions share an even answer. Different signs can lead to the same number.",
        "easierHint": "Work out 57 − 9 first. Find three more expressions with that answer.",
        "explanation": "96 ÷ 2 = 48; 26 + 22 = 48; 57 − 9 = 48; 27 + 21 = 48. All four have the same value."
      },
      {
        "label": "Equals 14",
        "answer": 14,
        "words": [
          "56 ÷ 4",
          "54 − 40",
          "11 + 3",
          "43 − 29"
        ],
        "hint": "The four expressions share an even answer. Different signs can lead to the same number.",
        "easierHint": "Work out 54 − 40 first. Find three more expressions with that answer.",
        "explanation": "56 ÷ 4 = 14; 54 − 40 = 14; 11 + 3 = 14; 43 − 29 = 14. All four have the same value."
      },
      {
        "label": "Equals 12",
        "answer": 12,
        "words": [
          "7 + 5",
          "2 × 6",
          "55 − 43",
          "58 − 46"
        ],
        "hint": "The four expressions share an even answer. Different signs can lead to the same number.",
        "easierHint": "Work out 55 − 43 first. Find three more expressions with that answer.",
        "explanation": "7 + 5 = 12; 2 × 6 = 12; 55 − 43 = 12; 58 − 46 = 12. All four have the same value."
      }
    ]
  },
  {
    "id": "maths-16",
    "title": "Number Connections 16",
    "difficulty": "Year 3",
    "groups": [
      {
        "label": "Equals 42",
        "answer": 42,
        "words": [
          "6 + 36",
          "84 ÷ 2",
          "81 − 39",
          "94 − 52"
        ],
        "hint": "The four expressions share an even answer. Different signs can lead to the same number.",
        "easierHint": "Work out 81 − 39 first. Find three more expressions with that answer.",
        "explanation": "6 + 36 = 42; 84 ÷ 2 = 42; 81 − 39 = 42; 94 − 52 = 42. All four have the same value."
      },
      {
        "label": "Equals 20",
        "answer": 20,
        "words": [
          "18 + 2",
          "78 − 58",
          "2 × 10",
          "10 + 10"
        ],
        "hint": "The four expressions share an even answer. Different signs can lead to the same number.",
        "easierHint": "Work out 78 − 58 first. Find three more expressions with that answer.",
        "explanation": "18 + 2 = 20; 78 − 58 = 20; 2 × 10 = 20; 10 + 10 = 20. All four have the same value."
      },
      {
        "label": "Equals 23",
        "answer": 23,
        "words": [
          "19 + 4",
          "37 − 14",
          "33 − 10",
          "40 − 17"
        ],
        "hint": "The four expressions share an odd answer. Different signs can lead to the same number.",
        "easierHint": "Work out 37 − 14 first. Find three more expressions with that answer.",
        "explanation": "19 + 4 = 23; 37 − 14 = 23; 33 − 10 = 23; 40 − 17 = 23. All four have the same value."
      },
      {
        "label": "Equals 43",
        "answer": 43,
        "words": [
          "86 ÷ 2",
          "68 − 25",
          "24 + 19",
          "8 + 35"
        ],
        "hint": "The four expressions share an odd answer. Different signs can lead to the same number.",
        "easierHint": "Work out 68 − 25 first. Find three more expressions with that answer.",
        "explanation": "86 ÷ 2 = 43; 68 − 25 = 43; 24 + 19 = 43; 8 + 35 = 43. All four have the same value."
      }
    ]
  },
  {
    "id": "maths-17",
    "title": "Number Connections 17",
    "difficulty": "Year 3",
    "groups": [
      {
        "label": "Equals 49",
        "answer": 49,
        "words": [
          "83 − 34",
          "98 − 49",
          "3 + 46",
          "98 ÷ 2"
        ],
        "hint": "The four expressions share an odd answer. Different signs can lead to the same number.",
        "easierHint": "Work out 83 − 34 first. Find three more expressions with that answer.",
        "explanation": "83 − 34 = 49; 98 − 49 = 49; 3 + 46 = 49; 98 ÷ 2 = 49. All four have the same value."
      },
      {
        "label": "Equals 13",
        "answer": 13,
        "words": [
          "60 − 47",
          "38 − 25",
          "65 ÷ 5",
          "5 + 8"
        ],
        "hint": "The four expressions share an odd answer. Different signs can lead to the same number.",
        "easierHint": "Work out 60 − 47 first. Find three more expressions with that answer.",
        "explanation": "60 − 47 = 13; 38 − 25 = 13; 65 ÷ 5 = 13; 5 + 8 = 13. All four have the same value."
      },
      {
        "label": "Equals 29",
        "answer": 29,
        "words": [
          "61 − 32",
          "27 + 2",
          "9 + 20",
          "37 − 8"
        ],
        "hint": "The four expressions share an odd answer. Different signs can lead to the same number.",
        "easierHint": "Work out 61 − 32 first. Find three more expressions with that answer.",
        "explanation": "61 − 32 = 29; 27 + 2 = 29; 9 + 20 = 29; 37 − 8 = 29. All four have the same value."
      },
      {
        "label": "Equals 27",
        "answer": 27,
        "words": [
          "3 × 9",
          "73 − 46",
          "25 + 2",
          "76 − 49"
        ],
        "hint": "The four expressions share an odd answer. Different signs can lead to the same number.",
        "easierHint": "Work out 73 − 46 first. Find three more expressions with that answer.",
        "explanation": "3 × 9 = 27; 73 − 46 = 27; 25 + 2 = 27; 76 − 49 = 27. All four have the same value."
      }
    ]
  },
  {
    "id": "maths-18",
    "title": "Number Connections 18",
    "difficulty": "Year 3",
    "groups": [
      {
        "label": "Equals 11",
        "answer": 11,
        "words": [
          "22 ÷ 2",
          "25 − 14",
          "64 − 53",
          "3 + 8"
        ],
        "hint": "The four expressions share an odd answer. Different signs can lead to the same number.",
        "easierHint": "Work out 25 − 14 first. Find three more expressions with that answer.",
        "explanation": "22 ÷ 2 = 11; 25 − 14 = 11; 64 − 53 = 11; 3 + 8 = 11. All four have the same value."
      },
      {
        "label": "Equals 40",
        "answer": 40,
        "words": [
          "32 + 8",
          "80 ÷ 2",
          "54 − 14",
          "94 − 54"
        ],
        "hint": "The four expressions share an even answer. Different signs can lead to the same number.",
        "easierHint": "Work out 54 − 14 first. Find three more expressions with that answer.",
        "explanation": "32 + 8 = 40; 80 ÷ 2 = 40; 54 − 14 = 40; 94 − 54 = 40. All four have the same value."
      },
      {
        "label": "Equals 14",
        "answer": 14,
        "words": [
          "2 × 7",
          "5 + 9",
          "74 − 60",
          "31 − 17"
        ],
        "hint": "The four expressions share an even answer. Different signs can lead to the same number.",
        "easierHint": "Work out 74 − 60 first. Find three more expressions with that answer.",
        "explanation": "2 × 7 = 14; 5 + 9 = 14; 74 − 60 = 14; 31 − 17 = 14. All four have the same value."
      },
      {
        "label": "Equals 42",
        "answer": 42,
        "words": [
          "99 − 57",
          "8 + 34",
          "51 − 9",
          "61 − 19"
        ],
        "hint": "The four expressions share an even answer. Different signs can lead to the same number.",
        "easierHint": "Work out 99 − 57 first. Find three more expressions with that answer.",
        "explanation": "99 − 57 = 42; 8 + 34 = 42; 51 − 9 = 42; 61 − 19 = 42. All four have the same value."
      }
    ]
  },
  {
    "id": "maths-19",
    "title": "Number Connections 19",
    "difficulty": "Year 3",
    "groups": [
      {
        "label": "Equals 45",
        "answer": 45,
        "words": [
          "10 + 35",
          "90 ÷ 2",
          "78 − 33",
          "67 − 22"
        ],
        "hint": "The four expressions share an odd answer. Different signs can lead to the same number.",
        "easierHint": "Work out 78 − 33 first. Find three more expressions with that answer.",
        "explanation": "10 + 35 = 45; 90 ÷ 2 = 45; 78 − 33 = 45; 67 − 22 = 45. All four have the same value."
      },
      {
        "label": "Equals 21",
        "answer": 21,
        "words": [
          "3 × 7",
          "74 − 53",
          "57 − 36",
          "8 + 13"
        ],
        "hint": "The four expressions share an odd answer. Different signs can lead to the same number.",
        "easierHint": "Work out 74 − 53 first. Find three more expressions with that answer.",
        "explanation": "3 × 7 = 21; 74 − 53 = 21; 57 − 36 = 21; 8 + 13 = 21. All four have the same value."
      },
      {
        "label": "Equals 27",
        "answer": 27,
        "words": [
          "8 + 19",
          "60 − 33",
          "3 + 24",
          "70 − 43"
        ],
        "hint": "The four expressions share an odd answer. Different signs can lead to the same number.",
        "easierHint": "Work out 60 − 33 first. Find three more expressions with that answer.",
        "explanation": "8 + 19 = 27; 60 − 33 = 27; 3 + 24 = 27; 70 − 43 = 27. All four have the same value."
      },
      {
        "label": "Equals 50",
        "answer": 50,
        "words": [
          "26 + 24",
          "80 − 30",
          "16 + 34",
          "100 ÷ 2"
        ],
        "hint": "The four expressions share an even answer. Different signs can lead to the same number.",
        "easierHint": "Work out 80 − 30 first. Find three more expressions with that answer.",
        "explanation": "26 + 24 = 50; 80 − 30 = 50; 16 + 34 = 50; 100 ÷ 2 = 50. All four have the same value."
      }
    ]
  },
  {
    "id": "maths-20",
    "title": "Number Connections 20",
    "difficulty": "Year 3",
    "groups": [
      {
        "label": "Equals 46",
        "answer": 46,
        "words": [
          "56 − 10",
          "82 − 36",
          "88 − 42",
          "19 + 27"
        ],
        "hint": "The four expressions share an even answer. Different signs can lead to the same number.",
        "easierHint": "Work out 56 − 10 first. Find three more expressions with that answer.",
        "explanation": "56 − 10 = 46; 82 − 36 = 46; 88 − 42 = 46; 19 + 27 = 46. All four have the same value."
      },
      {
        "label": "Equals 13",
        "answer": 13,
        "words": [
          "58 − 45",
          "26 ÷ 2",
          "47 − 34",
          "9 + 4"
        ],
        "hint": "The four expressions share an odd answer. Different signs can lead to the same number.",
        "easierHint": "Work out 58 − 45 first. Find three more expressions with that answer.",
        "explanation": "58 − 45 = 13; 26 ÷ 2 = 13; 47 − 34 = 13; 9 + 4 = 13. All four have the same value."
      },
      {
        "label": "Equals 12",
        "answer": 12,
        "words": [
          "17 − 5",
          "32 − 20",
          "4 × 3",
          "3 + 9"
        ],
        "hint": "The four expressions share an even answer. Different signs can lead to the same number.",
        "easierHint": "Work out 17 − 5 first. Find three more expressions with that answer.",
        "explanation": "17 − 5 = 12; 32 − 20 = 12; 4 × 3 = 12; 3 + 9 = 12. All four have the same value."
      },
      {
        "label": "Equals 41",
        "answer": 41,
        "words": [
          "17 + 24",
          "38 + 3",
          "52 − 11",
          "82 ÷ 2"
        ],
        "hint": "The four expressions share an odd answer. Different signs can lead to the same number.",
        "easierHint": "Work out 52 − 11 first. Find three more expressions with that answer.",
        "explanation": "17 + 24 = 41; 38 + 3 = 41; 52 − 11 = 41; 82 ÷ 2 = 41. All four have the same value."
      }
    ]
  },
  {
    "id": "maths-21",
    "title": "Number Connections 21",
    "difficulty": "Year 3",
    "groups": [
      {
        "label": "Equals 26",
        "answer": 26,
        "words": [
          "78 − 52",
          "3 + 23",
          "66 − 40",
          "17 + 9"
        ],
        "hint": "The four expressions share an even answer. Different signs can lead to the same number.",
        "easierHint": "Work out 78 − 52 first. Find three more expressions with that answer.",
        "explanation": "78 − 52 = 26; 3 + 23 = 26; 66 − 40 = 26; 17 + 9 = 26. All four have the same value."
      },
      {
        "label": "Equals 34",
        "answer": 34,
        "words": [
          "68 ÷ 2",
          "22 + 12",
          "14 + 20",
          "61 − 27"
        ],
        "hint": "The four expressions share an even answer. Different signs can lead to the same number.",
        "easierHint": "Work out 61 − 27 first. Find three more expressions with that answer.",
        "explanation": "68 ÷ 2 = 34; 22 + 12 = 34; 14 + 20 = 34; 61 − 27 = 34. All four have the same value."
      },
      {
        "label": "Equals 36",
        "answer": 36,
        "words": [
          "92 − 56",
          "64 − 28",
          "32 + 4",
          "9 × 4"
        ],
        "hint": "The four expressions share an even answer. Different signs can lead to the same number.",
        "easierHint": "Work out 92 − 56 first. Find three more expressions with that answer.",
        "explanation": "92 − 56 = 36; 64 − 28 = 36; 32 + 4 = 36; 9 × 4 = 36. All four have the same value."
      },
      {
        "label": "Equals 40",
        "answer": 40,
        "words": [
          "97 − 57",
          "85 − 45",
          "80 ÷ 2",
          "27 + 13"
        ],
        "hint": "The four expressions share an even answer. Different signs can lead to the same number.",
        "easierHint": "Work out 97 − 57 first. Find three more expressions with that answer.",
        "explanation": "97 − 57 = 40; 85 − 45 = 40; 80 ÷ 2 = 40; 27 + 13 = 40. All four have the same value."
      }
    ]
  },
  {
    "id": "maths-22",
    "title": "Number Connections 22",
    "difficulty": "Year 3",
    "groups": [
      {
        "label": "Equals 43",
        "answer": 43,
        "words": [
          "90 − 47",
          "18 + 25",
          "73 − 30",
          "69 − 26"
        ],
        "hint": "The four expressions share an odd answer. Different signs can lead to the same number.",
        "easierHint": "Work out 90 − 47 first. Find three more expressions with that answer.",
        "explanation": "90 − 47 = 43; 18 + 25 = 43; 73 − 30 = 43; 69 − 26 = 43. All four have the same value."
      },
      {
        "label": "Equals 12",
        "answer": 12,
        "words": [
          "71 − 59",
          "54 − 42",
          "6 + 6",
          "6 × 2"
        ],
        "hint": "The four expressions share an even answer. Different signs can lead to the same number.",
        "easierHint": "Work out 71 − 59 first. Find three more expressions with that answer.",
        "explanation": "71 − 59 = 12; 54 − 42 = 12; 6 + 6 = 12; 6 × 2 = 12. All four have the same value."
      },
      {
        "label": "Equals 19",
        "answer": 19,
        "words": [
          "4 + 15",
          "50 − 31",
          "30 − 11",
          "76 ÷ 4"
        ],
        "hint": "The four expressions share an odd answer. Different signs can lead to the same number.",
        "easierHint": "Work out 50 − 31 first. Find three more expressions with that answer.",
        "explanation": "4 + 15 = 19; 50 − 31 = 19; 30 − 11 = 19; 76 ÷ 4 = 19. All four have the same value."
      },
      {
        "label": "Equals 37",
        "answer": 37,
        "words": [
          "7 + 30",
          "23 + 14",
          "74 ÷ 2",
          "60 − 23"
        ],
        "hint": "The four expressions share an odd answer. Different signs can lead to the same number.",
        "easierHint": "Work out 60 − 23 first. Find three more expressions with that answer.",
        "explanation": "7 + 30 = 37; 23 + 14 = 37; 74 ÷ 2 = 37; 60 − 23 = 37. All four have the same value."
      }
    ]
  },
  {
    "id": "maths-23",
    "title": "Number Connections 23",
    "difficulty": "Year 3",
    "groups": [
      {
        "label": "Equals 24",
        "answer": 24,
        "words": [
          "4 + 20",
          "73 − 49",
          "78 − 54",
          "48 ÷ 2"
        ],
        "hint": "The four expressions share an even answer. Different signs can lead to the same number.",
        "easierHint": "Work out 73 − 49 first. Find three more expressions with that answer.",
        "explanation": "4 + 20 = 24; 73 − 49 = 24; 78 − 54 = 24; 48 ÷ 2 = 24. All four have the same value."
      },
      {
        "label": "Equals 16",
        "answer": 16,
        "words": [
          "73 − 57",
          "42 − 26",
          "3 + 13",
          "63 − 47"
        ],
        "hint": "The four expressions share an even answer. Different signs can lead to the same number.",
        "easierHint": "Work out 73 − 57 first. Find three more expressions with that answer.",
        "explanation": "73 − 57 = 16; 42 − 26 = 16; 3 + 13 = 16; 63 − 47 = 16. All four have the same value."
      },
      {
        "label": "Equals 32",
        "answer": 32,
        "words": [
          "18 + 14",
          "83 − 51",
          "68 − 36",
          "8 × 4"
        ],
        "hint": "The four expressions share an even answer. Different signs can lead to the same number.",
        "easierHint": "Work out 83 − 51 first. Find three more expressions with that answer.",
        "explanation": "18 + 14 = 32; 83 − 51 = 32; 68 − 36 = 32; 8 × 4 = 32. All four have the same value."
      },
      {
        "label": "Equals 11",
        "answer": 11,
        "words": [
          "32 − 21",
          "34 − 23",
          "55 ÷ 5",
          "6 + 5"
        ],
        "hint": "The four expressions share an odd answer. Different signs can lead to the same number.",
        "easierHint": "Work out 32 − 21 first. Find three more expressions with that answer.",
        "explanation": "32 − 21 = 11; 34 − 23 = 11; 55 ÷ 5 = 11; 6 + 5 = 11. All four have the same value."
      }
    ]
  },
  {
    "id": "maths-24",
    "title": "Number Connections 24",
    "difficulty": "Year 3",
    "groups": [
      {
        "label": "Equals 26",
        "answer": 26,
        "words": [
          "7 + 19",
          "22 + 4",
          "33 − 7",
          "52 ÷ 2"
        ],
        "hint": "The four expressions share an even answer. Different signs can lead to the same number.",
        "easierHint": "Work out 33 − 7 first. Find three more expressions with that answer.",
        "explanation": "7 + 19 = 26; 22 + 4 = 26; 33 − 7 = 26; 52 ÷ 2 = 26. All four have the same value."
      },
      {
        "label": "Equals 17",
        "answer": 17,
        "words": [
          "32 − 15",
          "6 + 11",
          "34 ÷ 2",
          "60 − 43"
        ],
        "hint": "The four expressions share an odd answer. Different signs can lead to the same number.",
        "easierHint": "Work out 32 − 15 first. Find three more expressions with that answer.",
        "explanation": "32 − 15 = 17; 6 + 11 = 17; 34 ÷ 2 = 17; 60 − 43 = 17. All four have the same value."
      },
      {
        "label": "Equals 46",
        "answer": 46,
        "words": [
          "36 + 10",
          "80 − 34",
          "51 − 5",
          "48 − 2"
        ],
        "hint": "The four expressions share an even answer. Different signs can lead to the same number.",
        "easierHint": "Work out 80 − 34 first. Find three more expressions with that answer.",
        "explanation": "36 + 10 = 46; 80 − 34 = 46; 51 − 5 = 46; 48 − 2 = 46. All four have the same value."
      },
      {
        "label": "Equals 18",
        "answer": 18,
        "words": [
          "9 × 2",
          "43 − 25",
          "8 + 10",
          "61 − 43"
        ],
        "hint": "The four expressions share an even answer. Different signs can lead to the same number.",
        "easierHint": "Work out 43 − 25 first. Find three more expressions with that answer.",
        "explanation": "9 × 2 = 18; 43 − 25 = 18; 8 + 10 = 18; 61 − 43 = 18. All four have the same value."
      }
    ]
  },
  {
    "id": "maths-25",
    "title": "Number Connections 25",
    "difficulty": "Year 3",
    "groups": [
      {
        "label": "Equals 56",
        "answer": 56,
        "words": [
          "67 − 11",
          "85 − 29",
          "8 × 7",
          "38 + 18"
        ],
        "hint": "The four expressions share an even answer. Different signs can lead to the same number.",
        "easierHint": "Work out 67 − 11 first. Find three more expressions with that answer.",
        "explanation": "67 − 11 = 56; 85 − 29 = 56; 8 × 7 = 56; 38 + 18 = 56. All four have the same value."
      },
      {
        "label": "Equals 23",
        "answer": 23,
        "words": [
          "2 + 21",
          "15 + 8",
          "61 − 38",
          "92 ÷ 4"
        ],
        "hint": "The four expressions share an odd answer. Different signs can lead to the same number.",
        "easierHint": "Work out 61 − 38 first. Find three more expressions with that answer.",
        "explanation": "2 + 21 = 23; 15 + 8 = 23; 61 − 38 = 23; 92 ÷ 4 = 23. All four have the same value."
      },
      {
        "label": "Equals 27",
        "answer": 27,
        "words": [
          "41 − 14",
          "24 + 3",
          "86 − 59",
          "21 + 6"
        ],
        "hint": "The four expressions share an odd answer. Different signs can lead to the same number.",
        "easierHint": "Work out 41 − 14 first. Find three more expressions with that answer.",
        "explanation": "41 − 14 = 27; 24 + 3 = 27; 86 − 59 = 27; 21 + 6 = 27. All four have the same value."
      },
      {
        "label": "Equals 16",
        "answer": 16,
        "words": [
          "10 + 6",
          "56 − 40",
          "26 − 10",
          "32 ÷ 2"
        ],
        "hint": "The four expressions share an even answer. Different signs can lead to the same number.",
        "easierHint": "Work out 56 − 40 first. Find three more expressions with that answer.",
        "explanation": "10 + 6 = 16; 56 − 40 = 16; 26 − 10 = 16; 32 ÷ 2 = 16. All four have the same value."
      }
    ]
  },
  {
    "id": "maths-26",
    "title": "Number Connections 26",
    "difficulty": "Year 3",
    "groups": [
      {
        "label": "Equals 28",
        "answer": 28,
        "words": [
          "59 − 31",
          "56 ÷ 2",
          "57 − 29",
          "11 + 17"
        ],
        "hint": "The four expressions share an even answer. Different signs can lead to the same number.",
        "easierHint": "Work out 59 − 31 first. Find three more expressions with that answer.",
        "explanation": "59 − 31 = 28; 56 ÷ 2 = 28; 57 − 29 = 28; 11 + 17 = 28. All four have the same value."
      },
      {
        "label": "Equals 26",
        "answer": 26,
        "words": [
          "20 + 6",
          "8 + 18",
          "82 − 56",
          "52 ÷ 2"
        ],
        "hint": "The four expressions share an even answer. Different signs can lead to the same number.",
        "easierHint": "Work out 82 − 56 first. Find three more expressions with that answer.",
        "explanation": "20 + 6 = 26; 8 + 18 = 26; 82 − 56 = 26; 52 ÷ 2 = 26. All four have the same value."
      },
      {
        "label": "Equals 15",
        "answer": 15,
        "words": [
          "46 − 31",
          "3 × 5",
          "63 − 48",
          "4 + 11"
        ],
        "hint": "The four expressions share an odd answer. Different signs can lead to the same number.",
        "easierHint": "Work out 46 − 31 first. Find three more expressions with that answer.",
        "explanation": "46 − 31 = 15; 3 × 5 = 15; 63 − 48 = 15; 4 + 11 = 15. All four have the same value."
      },
      {
        "label": "Equals 45",
        "answer": 45,
        "words": [
          "60 − 15",
          "98 − 53",
          "69 − 24",
          "39 + 6"
        ],
        "hint": "The four expressions share an odd answer. Different signs can lead to the same number.",
        "easierHint": "Work out 60 − 15 first. Find three more expressions with that answer.",
        "explanation": "60 − 15 = 45; 98 − 53 = 45; 69 − 24 = 45; 39 + 6 = 45. All four have the same value."
      }
    ]
  },
  {
    "id": "maths-27",
    "title": "Number Connections 27",
    "difficulty": "Year 3",
    "groups": [
      {
        "label": "Equals 22",
        "answer": 22,
        "words": [
          "88 ÷ 4",
          "82 − 60",
          "32 − 10",
          "4 + 18"
        ],
        "hint": "The four expressions share an even answer. Different signs can lead to the same number.",
        "easierHint": "Work out 82 − 60 first. Find three more expressions with that answer.",
        "explanation": "88 ÷ 4 = 22; 82 − 60 = 22; 32 − 10 = 22; 4 + 18 = 22. All four have the same value."
      },
      {
        "label": "Equals 29",
        "answer": 29,
        "words": [
          "31 − 2",
          "12 + 17",
          "3 + 26",
          "58 ÷ 2"
        ],
        "hint": "The four expressions share an odd answer. Different signs can lead to the same number.",
        "easierHint": "Work out 31 − 2 first. Find three more expressions with that answer.",
        "explanation": "31 − 2 = 29; 12 + 17 = 29; 3 + 26 = 29; 58 ÷ 2 = 29. All four have the same value."
      },
      {
        "label": "Equals 40",
        "answer": 40,
        "words": [
          "8 × 5",
          "28 + 12",
          "43 − 3",
          "100 − 60"
        ],
        "hint": "The four expressions share an even answer. Different signs can lead to the same number.",
        "easierHint": "Work out 43 − 3 first. Find three more expressions with that answer.",
        "explanation": "8 × 5 = 40; 28 + 12 = 40; 43 − 3 = 40; 100 − 60 = 40. All four have the same value."
      },
      {
        "label": "Equals 44",
        "answer": 44,
        "words": [
          "20 + 24",
          "3 + 41",
          "102 − 58",
          "76 − 32"
        ],
        "hint": "The four expressions share an even answer. Different signs can lead to the same number.",
        "easierHint": "Work out 102 − 58 first. Find three more expressions with that answer.",
        "explanation": "20 + 24 = 44; 3 + 41 = 44; 102 − 58 = 44; 76 − 32 = 44. All four have the same value."
      }
    ]
  },
  {
    "id": "maths-28",
    "title": "Number Connections 28",
    "difficulty": "Year 3",
    "groups": [
      {
        "label": "Equals 50",
        "answer": 50,
        "words": [
          "65 − 15",
          "5 × 10",
          "18 + 32",
          "13 + 37"
        ],
        "hint": "The four expressions share an even answer. Different signs can lead to the same number.",
        "easierHint": "Work out 65 − 15 first. Find three more expressions with that answer.",
        "explanation": "65 − 15 = 50; 5 × 10 = 50; 18 + 32 = 50; 13 + 37 = 50. All four have the same value."
      },
      {
        "label": "Equals 14",
        "answer": 14,
        "words": [
          "3 + 11",
          "27 − 13",
          "70 ÷ 5",
          "50 − 36"
        ],
        "hint": "The four expressions share an even answer. Different signs can lead to the same number.",
        "easierHint": "Work out 27 − 13 first. Find three more expressions with that answer.",
        "explanation": "3 + 11 = 14; 27 − 13 = 14; 70 ÷ 5 = 14; 50 − 36 = 14. All four have the same value."
      },
      {
        "label": "Equals 22",
        "answer": 22,
        "words": [
          "5 + 17",
          "88 ÷ 4",
          "61 − 39",
          "68 − 46"
        ],
        "hint": "The four expressions share an even answer. Different signs can lead to the same number.",
        "easierHint": "Work out 61 − 39 first. Find three more expressions with that answer.",
        "explanation": "5 + 17 = 22; 88 ÷ 4 = 22; 61 − 39 = 22; 68 − 46 = 22. All four have the same value."
      },
      {
        "label": "Equals 33",
        "answer": 33,
        "words": [
          "62 − 29",
          "41 − 8",
          "21 + 12",
          "38 − 5"
        ],
        "hint": "The four expressions share an odd answer. Different signs can lead to the same number.",
        "easierHint": "Work out 62 − 29 first. Find three more expressions with that answer.",
        "explanation": "62 − 29 = 33; 41 − 8 = 33; 21 + 12 = 33; 38 − 5 = 33. All four have the same value."
      }
    ]
  },
  {
    "id": "maths-29",
    "title": "Number Connections 29",
    "difficulty": "Year 3",
    "groups": [
      {
        "label": "Equals 28",
        "answer": 28,
        "words": [
          "56 ÷ 2",
          "16 + 12",
          "17 + 11",
          "88 − 60"
        ],
        "hint": "The four expressions share an even answer. Different signs can lead to the same number.",
        "easierHint": "Work out 88 − 60 first. Find three more expressions with that answer.",
        "explanation": "56 ÷ 2 = 28; 16 + 12 = 28; 17 + 11 = 28; 88 − 60 = 28. All four have the same value."
      },
      {
        "label": "Equals 45",
        "answer": 45,
        "words": [
          "42 + 3",
          "71 − 26",
          "99 − 54",
          "25 + 20"
        ],
        "hint": "The four expressions share an odd answer. Different signs can lead to the same number.",
        "easierHint": "Work out 71 − 26 first. Find three more expressions with that answer.",
        "explanation": "42 + 3 = 45; 71 − 26 = 45; 99 − 54 = 45; 25 + 20 = 45. All four have the same value."
      },
      {
        "label": "Equals 10",
        "answer": 10,
        "words": [
          "20 ÷ 2",
          "24 − 14",
          "7 + 3",
          "43 − 33"
        ],
        "hint": "The four expressions share an even answer. Different signs can lead to the same number.",
        "easierHint": "Work out 24 − 14 first. Find three more expressions with that answer.",
        "explanation": "20 ÷ 2 = 10; 24 − 14 = 10; 7 + 3 = 10; 43 − 33 = 10. All four have the same value."
      },
      {
        "label": "Equals 42",
        "answer": 42,
        "words": [
          "27 + 15",
          "75 − 33",
          "87 − 45",
          "6 × 7"
        ],
        "hint": "The four expressions share an even answer. Different signs can lead to the same number.",
        "easierHint": "Work out 75 − 33 first. Find three more expressions with that answer.",
        "explanation": "27 + 15 = 42; 75 − 33 = 42; 87 − 45 = 42; 6 × 7 = 42. All four have the same value."
      }
    ]
  },
  {
    "id": "maths-30",
    "title": "Number Connections 30",
    "difficulty": "Year 3",
    "groups": [
      {
        "label": "Equals 50",
        "answer": 50,
        "words": [
          "84 − 34",
          "24 + 26",
          "88 − 38",
          "107 − 57"
        ],
        "hint": "The four expressions share an even answer. Different signs can lead to the same number.",
        "easierHint": "Work out 84 − 34 first. Find three more expressions with that answer.",
        "explanation": "84 − 34 = 50; 24 + 26 = 50; 88 − 38 = 50; 107 − 57 = 50. All four have the same value."
      },
      {
        "label": "Equals 23",
        "answer": 23,
        "words": [
          "46 ÷ 2",
          "16 + 7",
          "12 + 11",
          "57 − 34"
        ],
        "hint": "The four expressions share an odd answer. Different signs can lead to the same number.",
        "easierHint": "Work out 57 − 34 first. Find three more expressions with that answer.",
        "explanation": "46 ÷ 2 = 23; 16 + 7 = 23; 12 + 11 = 23; 57 − 34 = 23. All four have the same value."
      },
      {
        "label": "Equals 54",
        "answer": 54,
        "words": [
          "26 + 28",
          "4 + 50",
          "9 × 6",
          "96 − 42"
        ],
        "hint": "The four expressions share an even answer. Different signs can lead to the same number.",
        "easierHint": "Work out 96 − 42 first. Find three more expressions with that answer.",
        "explanation": "26 + 28 = 54; 4 + 50 = 54; 9 × 6 = 54; 96 − 42 = 54. All four have the same value."
      },
      {
        "label": "Equals 11",
        "answer": 11,
        "words": [
          "54 − 43",
          "7 + 4",
          "22 ÷ 2",
          "61 − 50"
        ],
        "hint": "The four expressions share an odd answer. Different signs can lead to the same number.",
        "easierHint": "Work out 54 − 43 first. Find three more expressions with that answer.",
        "explanation": "54 − 43 = 11; 7 + 4 = 11; 22 ÷ 2 = 11; 61 − 50 = 11. All four have the same value."
      }
    ]
  },
  {
    "id": "maths-31",
    "title": "Number Connections 31",
    "difficulty": "Year 3",
    "groups": [
      {
        "label": "Equals 19",
        "answer": 19,
        "words": [
          "3 + 16",
          "38 ÷ 2",
          "76 − 57",
          "53 − 34"
        ],
        "hint": "The four expressions share an odd answer. Different signs can lead to the same number.",
        "easierHint": "Work out 76 − 57 first. Find three more expressions with that answer.",
        "explanation": "3 + 16 = 19; 38 ÷ 2 = 19; 76 − 57 = 19; 53 − 34 = 19. All four have the same value."
      },
      {
        "label": "Equals 28",
        "answer": 28,
        "words": [
          "52 − 24",
          "7 × 4",
          "61 − 33",
          "7 + 21"
        ],
        "hint": "The four expressions share an even answer. Different signs can lead to the same number.",
        "easierHint": "Work out 52 − 24 first. Find three more expressions with that answer.",
        "explanation": "52 − 24 = 28; 7 × 4 = 28; 61 − 33 = 28; 7 + 21 = 28. All four have the same value."
      },
      {
        "label": "Equals 47",
        "answer": 47,
        "words": [
          "44 + 3",
          "15 + 32",
          "72 − 25",
          "80 − 33"
        ],
        "hint": "The four expressions share an odd answer. Different signs can lead to the same number.",
        "easierHint": "Work out 72 − 25 first. Find three more expressions with that answer.",
        "explanation": "44 + 3 = 47; 15 + 32 = 47; 72 − 25 = 47; 80 − 33 = 47. All four have the same value."
      },
      {
        "label": "Equals 36",
        "answer": 36,
        "words": [
          "6 + 30",
          "72 ÷ 2",
          "94 − 58",
          "3 + 33"
        ],
        "hint": "The four expressions share an even answer. Different signs can lead to the same number.",
        "easierHint": "Work out 94 − 58 first. Find three more expressions with that answer.",
        "explanation": "6 + 30 = 36; 72 ÷ 2 = 36; 94 − 58 = 36; 3 + 33 = 36. All four have the same value."
      }
    ]
  },
  {
    "id": "maths-32",
    "title": "Number Connections 32",
    "difficulty": "Year 3",
    "groups": [
      {
        "label": "Equals 24",
        "answer": 24,
        "words": [
          "96 ÷ 4",
          "27 − 3",
          "70 − 46",
          "22 + 2"
        ],
        "hint": "The four expressions share an even answer. Different signs can lead to the same number.",
        "easierHint": "Work out 27 − 3 first. Find three more expressions with that answer.",
        "explanation": "96 ÷ 4 = 24; 27 − 3 = 24; 70 − 46 = 24; 22 + 2 = 24. All four have the same value."
      },
      {
        "label": "Equals 49",
        "answer": 49,
        "words": [
          "7 × 7",
          "73 − 24",
          "6 + 43",
          "21 + 28"
        ],
        "hint": "The four expressions share an odd answer. Different signs can lead to the same number.",
        "easierHint": "Work out 73 − 24 first. Find three more expressions with that answer.",
        "explanation": "7 × 7 = 49; 73 − 24 = 49; 6 + 43 = 49; 21 + 28 = 49. All four have the same value."
      },
      {
        "label": "Equals 11",
        "answer": 11,
        "words": [
          "44 ÷ 4",
          "19 − 8",
          "42 − 31",
          "5 + 6"
        ],
        "hint": "The four expressions share an odd answer. Different signs can lead to the same number.",
        "easierHint": "Work out 19 − 8 first. Find three more expressions with that answer.",
        "explanation": "44 ÷ 4 = 11; 19 − 8 = 11; 42 − 31 = 11; 5 + 6 = 11. All four have the same value."
      },
      {
        "label": "Equals 37",
        "answer": 37,
        "words": [
          "78 − 41",
          "86 − 49",
          "14 + 23",
          "94 − 57"
        ],
        "hint": "The four expressions share an odd answer. Different signs can lead to the same number.",
        "easierHint": "Work out 78 − 41 first. Find three more expressions with that answer.",
        "explanation": "78 − 41 = 37; 86 − 49 = 37; 14 + 23 = 37; 94 − 57 = 37. All four have the same value."
      }
    ]
  },
  {
    "id": "maths-33",
    "title": "Number Connections 33",
    "difficulty": "Year 3",
    "groups": [
      {
        "label": "Equals 18",
        "answer": 18,
        "words": [
          "54 − 36",
          "13 + 5",
          "33 − 15",
          "3 × 6"
        ],
        "hint": "The four expressions share an even answer. Different signs can lead to the same number.",
        "easierHint": "Work out 54 − 36 first. Find three more expressions with that answer.",
        "explanation": "54 − 36 = 18; 13 + 5 = 18; 33 − 15 = 18; 3 × 6 = 18. All four have the same value."
      },
      {
        "label": "Equals 20",
        "answer": 20,
        "words": [
          "11 + 9",
          "52 − 32",
          "100 ÷ 5",
          "23 − 3"
        ],
        "hint": "The four expressions share an even answer. Different signs can lead to the same number.",
        "easierHint": "Work out 52 − 32 first. Find three more expressions with that answer.",
        "explanation": "11 + 9 = 20; 52 − 32 = 20; 100 ÷ 5 = 20; 23 − 3 = 20. All four have the same value."
      },
      {
        "label": "Equals 47",
        "answer": 47,
        "words": [
          "94 ÷ 2",
          "65 − 18",
          "25 + 22",
          "9 + 38"
        ],
        "hint": "The four expressions share an odd answer. Different signs can lead to the same number.",
        "easierHint": "Work out 65 − 18 first. Find three more expressions with that answer.",
        "explanation": "94 ÷ 2 = 47; 65 − 18 = 47; 25 + 22 = 47; 9 + 38 = 47. All four have the same value."
      },
      {
        "label": "Equals 48",
        "answer": 48,
        "words": [
          "105 − 57",
          "96 − 48",
          "39 + 9",
          "40 + 8"
        ],
        "hint": "The four expressions share an even answer. Different signs can lead to the same number.",
        "easierHint": "Work out 105 − 57 first. Find three more expressions with that answer.",
        "explanation": "105 − 57 = 48; 96 − 48 = 48; 39 + 9 = 48; 40 + 8 = 48. All four have the same value."
      }
    ]
  },
  {
    "id": "maths-34",
    "title": "Number Connections 34",
    "difficulty": "Year 3",
    "groups": [
      {
        "label": "Equals 30",
        "answer": 30,
        "words": [
          "23 + 7",
          "60 ÷ 2",
          "39 − 9",
          "13 + 17"
        ],
        "hint": "The four expressions share an even answer. Different signs can lead to the same number.",
        "easierHint": "Work out 39 − 9 first. Find three more expressions with that answer.",
        "explanation": "23 + 7 = 30; 60 ÷ 2 = 30; 39 − 9 = 30; 13 + 17 = 30. All four have the same value."
      },
      {
        "label": "Equals 15",
        "answer": 15,
        "words": [
          "17 − 2",
          "2 + 13",
          "75 ÷ 5",
          "22 − 7"
        ],
        "hint": "The four expressions share an odd answer. Different signs can lead to the same number.",
        "easierHint": "Work out 17 − 2 first. Find three more expressions with that answer.",
        "explanation": "17 − 2 = 15; 2 + 13 = 15; 75 ÷ 5 = 15; 22 − 7 = 15. All four have the same value."
      },
      {
        "label": "Equals 24",
        "answer": 24,
        "words": [
          "8 × 3",
          "3 + 21",
          "7 + 17",
          "33 − 9"
        ],
        "hint": "The four expressions share an even answer. Different signs can lead to the same number.",
        "easierHint": "Work out 33 − 9 first. Find three more expressions with that answer.",
        "explanation": "8 × 3 = 24; 3 + 21 = 24; 7 + 17 = 24; 33 − 9 = 24. All four have the same value."
      },
      {
        "label": "Equals 43",
        "answer": 43,
        "words": [
          "29 + 14",
          "87 − 44",
          "52 − 9",
          "97 − 54"
        ],
        "hint": "The four expressions share an odd answer. Different signs can lead to the same number.",
        "easierHint": "Work out 87 − 44 first. Find three more expressions with that answer.",
        "explanation": "29 + 14 = 43; 87 − 44 = 43; 52 − 9 = 43; 97 − 54 = 43. All four have the same value."
      }
    ]
  },
  {
    "id": "maths-35",
    "title": "Number Connections 35",
    "difficulty": "Year 3",
    "groups": [
      {
        "label": "Equals 30",
        "answer": 30,
        "words": [
          "36 − 6",
          "22 + 8",
          "34 − 4",
          "60 ÷ 2"
        ],
        "hint": "The four expressions share an even answer. Different signs can lead to the same number.",
        "easierHint": "Work out 36 − 6 first. Find three more expressions with that answer.",
        "explanation": "36 − 6 = 30; 22 + 8 = 30; 34 − 4 = 30; 60 ÷ 2 = 30. All four have the same value."
      },
      {
        "label": "Equals 10",
        "answer": 10,
        "words": [
          "19 − 9",
          "6 + 4",
          "5 × 2",
          "44 − 34"
        ],
        "hint": "The four expressions share an even answer. Different signs can lead to the same number.",
        "easierHint": "Work out 19 − 9 first. Find three more expressions with that answer.",
        "explanation": "19 − 9 = 10; 6 + 4 = 10; 5 × 2 = 10; 44 − 34 = 10. All four have the same value."
      },
      {
        "label": "Equals 13",
        "answer": 13,
        "words": [
          "20 − 7",
          "8 + 5",
          "26 ÷ 2",
          "29 − 16"
        ],
        "hint": "The four expressions share an odd answer. Different signs can lead to the same number.",
        "easierHint": "Work out 20 − 7 first. Find three more expressions with that answer.",
        "explanation": "20 − 7 = 13; 8 + 5 = 13; 26 ÷ 2 = 13; 29 − 16 = 13. All four have the same value."
      },
      {
        "label": "Equals 39",
        "answer": 39,
        "words": [
          "28 + 11",
          "22 + 17",
          "46 − 7",
          "53 − 14"
        ],
        "hint": "The four expressions share an odd answer. Different signs can lead to the same number.",
        "easierHint": "Work out 46 − 7 first. Find three more expressions with that answer.",
        "explanation": "28 + 11 = 39; 22 + 17 = 39; 46 − 7 = 39; 53 − 14 = 39. All four have the same value."
      }
    ]
  },
  {
    "id": "maths-36",
    "title": "Number Connections 36",
    "difficulty": "Year 3",
    "groups": [
      {
        "label": "Equals 27",
        "answer": 27,
        "words": [
          "12 + 15",
          "34 − 7",
          "5 + 22",
          "54 ÷ 2"
        ],
        "hint": "The four expressions share an odd answer. Different signs can lead to the same number.",
        "easierHint": "Work out 34 − 7 first. Find three more expressions with that answer.",
        "explanation": "12 + 15 = 27; 34 − 7 = 27; 5 + 22 = 27; 54 ÷ 2 = 27. All four have the same value."
      },
      {
        "label": "Equals 60",
        "answer": 60,
        "words": [
          "119 − 59",
          "10 × 6",
          "5 + 55",
          "48 + 12"
        ],
        "hint": "The four expressions share an even answer. Different signs can lead to the same number.",
        "easierHint": "Work out 119 − 59 first. Find three more expressions with that answer.",
        "explanation": "119 − 59 = 60; 10 × 6 = 60; 5 + 55 = 60; 48 + 12 = 60. All four have the same value."
      },
      {
        "label": "Equals 26",
        "answer": 26,
        "words": [
          "28 − 2",
          "29 − 3",
          "13 + 13",
          "77 − 51"
        ],
        "hint": "The four expressions share an even answer. Different signs can lead to the same number.",
        "easierHint": "Work out 28 − 2 first. Find three more expressions with that answer.",
        "explanation": "28 − 2 = 26; 29 − 3 = 26; 13 + 13 = 26; 77 − 51 = 26. All four have the same value."
      },
      {
        "label": "Equals 25",
        "answer": 25,
        "words": [
          "73 − 48",
          "83 − 58",
          "12 + 13",
          "100 ÷ 4"
        ],
        "hint": "The four expressions share an odd answer. Different signs can lead to the same number.",
        "easierHint": "Work out 73 − 48 first. Find three more expressions with that answer.",
        "explanation": "73 − 48 = 25; 83 − 58 = 25; 12 + 13 = 25; 100 ÷ 4 = 25. All four have the same value."
      }
    ]
  },
  {
    "id": "maths-37",
    "title": "Number Connections 37",
    "difficulty": "Year 3",
    "groups": [
      {
        "label": "Equals 29",
        "answer": 29,
        "words": [
          "25 + 4",
          "55 − 26",
          "18 + 11",
          "32 − 3"
        ],
        "hint": "The four expressions share an odd answer. Different signs can lead to the same number.",
        "easierHint": "Work out 55 − 26 first. Find three more expressions with that answer.",
        "explanation": "25 + 4 = 29; 55 − 26 = 29; 18 + 11 = 29; 32 − 3 = 29. All four have the same value."
      },
      {
        "label": "Equals 13",
        "answer": 13,
        "words": [
          "28 − 15",
          "6 + 7",
          "36 − 23",
          "52 ÷ 4"
        ],
        "hint": "The four expressions share an odd answer. Different signs can lead to the same number.",
        "easierHint": "Work out 28 − 15 first. Find three more expressions with that answer.",
        "explanation": "28 − 15 = 13; 6 + 7 = 13; 36 − 23 = 13; 52 ÷ 4 = 13. All four have the same value."
      },
      {
        "label": "Equals 30",
        "answer": 30,
        "words": [
          "73 − 43",
          "6 × 5",
          "5 + 25",
          "66 − 36"
        ],
        "hint": "The four expressions share an even answer. Different signs can lead to the same number.",
        "easierHint": "Work out 73 − 43 first. Find three more expressions with that answer.",
        "explanation": "73 − 43 = 30; 6 × 5 = 30; 5 + 25 = 30; 66 − 36 = 30. All four have the same value."
      },
      {
        "label": "Equals 39",
        "answer": 39,
        "words": [
          "78 ÷ 2",
          "15 + 24",
          "21 + 18",
          "45 − 6"
        ],
        "hint": "The four expressions share an odd answer. Different signs can lead to the same number.",
        "easierHint": "Work out 45 − 6 first. Find three more expressions with that answer.",
        "explanation": "78 ÷ 2 = 39; 15 + 24 = 39; 21 + 18 = 39; 45 − 6 = 39. All four have the same value."
      }
    ]
  },
  {
    "id": "maths-38",
    "title": "Number Connections 38",
    "difficulty": "Year 3",
    "groups": [
      {
        "label": "Equals 49",
        "answer": 49,
        "words": [
          "90 − 41",
          "65 − 16",
          "18 + 31",
          "77 − 28"
        ],
        "hint": "The four expressions share an odd answer. Different signs can lead to the same number.",
        "easierHint": "Work out 90 − 41 first. Find three more expressions with that answer.",
        "explanation": "90 − 41 = 49; 65 − 16 = 49; 18 + 31 = 49; 77 − 28 = 49. All four have the same value."
      },
      {
        "label": "Equals 31",
        "answer": 31,
        "words": [
          "3 + 28",
          "20 + 11",
          "33 − 2",
          "62 ÷ 2"
        ],
        "hint": "The four expressions share an odd answer. Different signs can lead to the same number.",
        "easierHint": "Work out 33 − 2 first. Find three more expressions with that answer.",
        "explanation": "3 + 28 = 31; 20 + 11 = 31; 33 − 2 = 31; 62 ÷ 2 = 31. All four have the same value."
      },
      {
        "label": "Equals 40",
        "answer": 40,
        "words": [
          "5 × 8",
          "7 + 33",
          "51 − 11",
          "8 + 32"
        ],
        "hint": "The four expressions share an even answer. Different signs can lead to the same number.",
        "easierHint": "Work out 51 − 11 first. Find three more expressions with that answer.",
        "explanation": "5 × 8 = 40; 7 + 33 = 40; 51 − 11 = 40; 8 + 32 = 40. All four have the same value."
      },
      {
        "label": "Equals 32",
        "answer": 32,
        "words": [
          "87 − 55",
          "64 ÷ 2",
          "27 + 5",
          "61 − 29"
        ],
        "hint": "The four expressions share an even answer. Different signs can lead to the same number.",
        "easierHint": "Work out 87 − 55 first. Find three more expressions with that answer.",
        "explanation": "87 − 55 = 32; 64 ÷ 2 = 32; 27 + 5 = 32; 61 − 29 = 32. All four have the same value."
      }
    ]
  },
  {
    "id": "maths-39",
    "title": "Number Connections 39",
    "difficulty": "Year 3",
    "groups": [
      {
        "label": "Equals 20",
        "answer": 20,
        "words": [
          "40 ÷ 2",
          "49 − 29",
          "4 + 16",
          "12 + 8"
        ],
        "hint": "The four expressions share an even answer. Different signs can lead to the same number.",
        "easierHint": "Work out 49 − 29 first. Find three more expressions with that answer.",
        "explanation": "40 ÷ 2 = 20; 49 − 29 = 20; 4 + 16 = 20; 12 + 8 = 20. All four have the same value."
      },
      {
        "label": "Equals 50",
        "answer": 50,
        "words": [
          "20 + 30",
          "78 − 28",
          "56 − 6",
          "10 × 5"
        ],
        "hint": "The four expressions share an even answer. Different signs can lead to the same number.",
        "easierHint": "Work out 78 − 28 first. Find three more expressions with that answer.",
        "explanation": "20 + 30 = 50; 78 − 28 = 50; 56 − 6 = 50; 10 × 5 = 50. All four have the same value."
      },
      {
        "label": "Equals 16",
        "answer": 16,
        "words": [
          "80 ÷ 5",
          "53 − 37",
          "76 − 60",
          "11 + 5"
        ],
        "hint": "The four expressions share an even answer. Different signs can lead to the same number.",
        "easierHint": "Work out 53 − 37 first. Find three more expressions with that answer.",
        "explanation": "80 ÷ 5 = 16; 53 − 37 = 16; 76 − 60 = 16; 11 + 5 = 16. All four have the same value."
      },
      {
        "label": "Equals 33",
        "answer": 33,
        "words": [
          "29 + 4",
          "53 − 20",
          "83 − 50",
          "5 + 28"
        ],
        "hint": "The four expressions share an odd answer. Different signs can lead to the same number.",
        "easierHint": "Work out 53 − 20 first. Find three more expressions with that answer.",
        "explanation": "29 + 4 = 33; 53 − 20 = 33; 83 − 50 = 33; 5 + 28 = 33. All four have the same value."
      }
    ]
  },
  {
    "id": "maths-40",
    "title": "Number Connections 40",
    "difficulty": "Year 3",
    "groups": [
      {
        "label": "Equals 36",
        "answer": 36,
        "words": [
          "6 × 6",
          "9 + 27",
          "59 − 23",
          "24 + 12"
        ],
        "hint": "The four expressions share an even answer. Different signs can lead to the same number.",
        "easierHint": "Work out 59 − 23 first. Find three more expressions with that answer.",
        "explanation": "6 × 6 = 36; 9 + 27 = 36; 59 − 23 = 36; 24 + 12 = 36. All four have the same value."
      },
      {
        "label": "Equals 46",
        "answer": 46,
        "words": [
          "65 − 19",
          "83 − 37",
          "70 − 24",
          "43 + 3"
        ],
        "hint": "The four expressions share an even answer. Different signs can lead to the same number.",
        "easierHint": "Work out 65 − 19 first. Find three more expressions with that answer.",
        "explanation": "65 − 19 = 46; 83 − 37 = 46; 70 − 24 = 46; 43 + 3 = 46. All four have the same value."
      },
      {
        "label": "Equals 17",
        "answer": 17,
        "words": [
          "15 + 2",
          "68 ÷ 4",
          "22 − 5",
          "25 − 8"
        ],
        "hint": "The four expressions share an odd answer. Different signs can lead to the same number.",
        "easierHint": "Work out 22 − 5 first. Find three more expressions with that answer.",
        "explanation": "15 + 2 = 17; 68 ÷ 4 = 17; 22 − 5 = 17; 25 − 8 = 17. All four have the same value."
      },
      {
        "label": "Equals 25",
        "answer": 25,
        "words": [
          "21 + 4",
          "14 + 11",
          "50 ÷ 2",
          "68 − 43"
        ],
        "hint": "The four expressions share an odd answer. Different signs can lead to the same number.",
        "easierHint": "Work out 68 − 43 first. Find three more expressions with that answer.",
        "explanation": "21 + 4 = 25; 14 + 11 = 25; 50 ÷ 2 = 25; 68 − 43 = 25. All four have the same value."
      }
    ]
  },
  {
    "id": "maths-41",
    "title": "Number Connections 41",
    "difficulty": "Year 3",
    "groups": [
      {
        "label": "Equals 21",
        "answer": 21,
        "words": [
          "13 + 8",
          "53 − 32",
          "5 + 16",
          "35 − 14"
        ],
        "hint": "The four expressions share an odd answer. Different signs can lead to the same number.",
        "easierHint": "Work out 53 − 32 first. Find three more expressions with that answer.",
        "explanation": "13 + 8 = 21; 53 − 32 = 21; 5 + 16 = 21; 35 − 14 = 21. All four have the same value."
      },
      {
        "label": "Equals 24",
        "answer": 24,
        "words": [
          "11 + 13",
          "4 × 6",
          "36 − 12",
          "45 − 21"
        ],
        "hint": "The four expressions share an even answer. Different signs can lead to the same number.",
        "easierHint": "Work out 36 − 12 first. Find three more expressions with that answer.",
        "explanation": "11 + 13 = 24; 4 × 6 = 24; 36 − 12 = 24; 45 − 21 = 24. All four have the same value."
      },
      {
        "label": "Equals 33",
        "answer": 33,
        "words": [
          "50 − 17",
          "66 ÷ 2",
          "30 + 3",
          "57 − 24"
        ],
        "hint": "The four expressions share an odd answer. Different signs can lead to the same number.",
        "easierHint": "Work out 50 − 17 first. Find three more expressions with that answer.",
        "explanation": "50 − 17 = 33; 66 ÷ 2 = 33; 30 + 3 = 33; 57 − 24 = 33. All four have the same value."
      },
      {
        "label": "Equals 11",
        "answer": 11,
        "words": [
          "55 ÷ 5",
          "30 − 19",
          "9 + 2",
          "48 − 37"
        ],
        "hint": "The four expressions share an odd answer. Different signs can lead to the same number.",
        "easierHint": "Work out 30 − 19 first. Find three more expressions with that answer.",
        "explanation": "55 ÷ 5 = 11; 30 − 19 = 11; 9 + 2 = 11; 48 − 37 = 11. All four have the same value."
      }
    ]
  },
  {
    "id": "maths-42",
    "title": "Number Connections 42",
    "difficulty": "Year 3",
    "groups": [
      {
        "label": "Equals 54",
        "answer": 54,
        "words": [
          "6 × 9",
          "10 + 44",
          "74 − 20",
          "35 + 19"
        ],
        "hint": "The four expressions share an even answer. Different signs can lead to the same number.",
        "easierHint": "Work out 74 − 20 first. Find three more expressions with that answer.",
        "explanation": "6 × 9 = 54; 10 + 44 = 54; 74 − 20 = 54; 35 + 19 = 54. All four have the same value."
      },
      {
        "label": "Equals 29",
        "answer": 29,
        "words": [
          "58 ÷ 2",
          "15 + 14",
          "6 + 23",
          "72 − 43"
        ],
        "hint": "The four expressions share an odd answer. Different signs can lead to the same number.",
        "easierHint": "Work out 72 − 43 first. Find three more expressions with that answer.",
        "explanation": "58 ÷ 2 = 29; 15 + 14 = 29; 6 + 23 = 29; 72 − 43 = 29. All four have the same value."
      },
      {
        "label": "Equals 15",
        "answer": 15,
        "words": [
          "67 − 52",
          "30 ÷ 2",
          "8 + 7",
          "25 − 10"
        ],
        "hint": "The four expressions share an odd answer. Different signs can lead to the same number.",
        "easierHint": "Work out 67 − 52 first. Find three more expressions with that answer.",
        "explanation": "67 − 52 = 15; 30 ÷ 2 = 15; 8 + 7 = 15; 25 − 10 = 15. All four have the same value."
      },
      {
        "label": "Equals 41",
        "answer": 41,
        "words": [
          "7 + 34",
          "94 − 53",
          "49 − 8",
          "70 − 29"
        ],
        "hint": "The four expressions share an odd answer. Different signs can lead to the same number.",
        "easierHint": "Work out 94 − 53 first. Find three more expressions with that answer.",
        "explanation": "7 + 34 = 41; 94 − 53 = 41; 49 − 8 = 41; 70 − 29 = 41. All four have the same value."
      }
    ]
  },
  {
    "id": "maths-43",
    "title": "Number Connections 43",
    "difficulty": "Year 3",
    "groups": [
      {
        "label": "Equals 34",
        "answer": 34,
        "words": [
          "71 − 37",
          "13 + 21",
          "43 − 9",
          "20 + 14"
        ],
        "hint": "The four expressions share an even answer. Different signs can lead to the same number.",
        "easierHint": "Work out 71 − 37 first. Find three more expressions with that answer.",
        "explanation": "71 − 37 = 34; 13 + 21 = 34; 43 − 9 = 34; 20 + 14 = 34. All four have the same value."
      },
      {
        "label": "Equals 23",
        "answer": 23,
        "words": [
          "92 ÷ 4",
          "10 + 13",
          "72 − 49",
          "75 − 52"
        ],
        "hint": "The four expressions share an odd answer. Different signs can lead to the same number.",
        "easierHint": "Work out 72 − 49 first. Find three more expressions with that answer.",
        "explanation": "92 ÷ 4 = 23; 10 + 13 = 23; 72 − 49 = 23; 75 − 52 = 23. All four have the same value."
      },
      {
        "label": "Equals 30",
        "answer": 30,
        "words": [
          "35 − 5",
          "6 + 24",
          "41 − 11",
          "3 × 10"
        ],
        "hint": "The four expressions share an even answer. Different signs can lead to the same number.",
        "easierHint": "Work out 35 − 5 first. Find three more expressions with that answer.",
        "explanation": "35 − 5 = 30; 6 + 24 = 30; 41 − 11 = 30; 3 × 10 = 30. All four have the same value."
      },
      {
        "label": "Equals 25",
        "answer": 25,
        "words": [
          "49 − 24",
          "50 ÷ 2",
          "3 + 22",
          "19 + 6"
        ],
        "hint": "The four expressions share an odd answer. Different signs can lead to the same number.",
        "easierHint": "Work out 49 − 24 first. Find three more expressions with that answer.",
        "explanation": "49 − 24 = 25; 50 ÷ 2 = 25; 3 + 22 = 25; 19 + 6 = 25. All four have the same value."
      }
    ]
  },
  {
    "id": "maths-44",
    "title": "Number Connections 44",
    "difficulty": "Year 3",
    "groups": [
      {
        "label": "Equals 27",
        "answer": 27,
        "words": [
          "18 + 9",
          "30 − 3",
          "22 + 5",
          "54 ÷ 2"
        ],
        "hint": "The four expressions share an odd answer. Different signs can lead to the same number.",
        "easierHint": "Work out 30 − 3 first. Find three more expressions with that answer.",
        "explanation": "18 + 9 = 27; 30 − 3 = 27; 22 + 5 = 27; 54 ÷ 2 = 27. All four have the same value."
      },
      {
        "label": "Equals 45",
        "answer": 45,
        "words": [
          "28 + 17",
          "26 + 19",
          "9 × 5",
          "88 − 43"
        ],
        "hint": "The four expressions share an odd answer. Different signs can lead to the same number.",
        "easierHint": "Work out 88 − 43 first. Find three more expressions with that answer.",
        "explanation": "28 + 17 = 45; 26 + 19 = 45; 9 × 5 = 45; 88 − 43 = 45. All four have the same value."
      },
      {
        "label": "Equals 14",
        "answer": 14,
        "words": [
          "69 − 55",
          "12 + 2",
          "57 − 43",
          "28 ÷ 2"
        ],
        "hint": "The four expressions share an even answer. Different signs can lead to the same number.",
        "easierHint": "Work out 69 − 55 first. Find three more expressions with that answer.",
        "explanation": "69 − 55 = 14; 12 + 2 = 14; 57 − 43 = 14; 28 ÷ 2 = 14. All four have the same value."
      },
      {
        "label": "Equals 44",
        "answer": 44,
        "words": [
          "83 − 39",
          "78 − 34",
          "85 − 41",
          "14 + 30"
        ],
        "hint": "The four expressions share an even answer. Different signs can lead to the same number.",
        "easierHint": "Work out 83 − 39 first. Find three more expressions with that answer.",
        "explanation": "83 − 39 = 44; 78 − 34 = 44; 85 − 41 = 44; 14 + 30 = 44. All four have the same value."
      }
    ]
  },
  {
    "id": "maths-45",
    "title": "Number Connections 45",
    "difficulty": "Year 3",
    "groups": [
      {
        "label": "Equals 48",
        "answer": 48,
        "words": [
          "6 + 42",
          "64 − 16",
          "21 + 27",
          "72 − 24"
        ],
        "hint": "The four expressions share an even answer. Different signs can lead to the same number.",
        "easierHint": "Work out 64 − 16 first. Find three more expressions with that answer.",
        "explanation": "6 + 42 = 48; 64 − 16 = 48; 21 + 27 = 48; 72 − 24 = 48. All four have the same value."
      },
      {
        "label": "Equals 45",
        "answer": 45,
        "words": [
          "5 × 9",
          "84 − 39",
          "32 + 13",
          "53 − 8"
        ],
        "hint": "The four expressions share an odd answer. Different signs can lead to the same number.",
        "easierHint": "Work out 84 − 39 first. Find three more expressions with that answer.",
        "explanation": "5 × 9 = 45; 84 − 39 = 45; 32 + 13 = 45; 53 − 8 = 45. All four have the same value."
      },
      {
        "label": "Equals 35",
        "answer": 35,
        "words": [
          "59 − 24",
          "94 − 59",
          "18 + 17",
          "70 ÷ 2"
        ],
        "hint": "The four expressions share an odd answer. Different signs can lead to the same number.",
        "easierHint": "Work out 59 − 24 first. Find three more expressions with that answer.",
        "explanation": "59 − 24 = 35; 94 − 59 = 35; 18 + 17 = 35; 70 ÷ 2 = 35. All four have the same value."
      },
      {
        "label": "Equals 12",
        "answer": 12,
        "words": [
          "48 ÷ 4",
          "38 − 26",
          "10 + 2",
          "49 − 37"
        ],
        "hint": "The four expressions share an even answer. Different signs can lead to the same number.",
        "easierHint": "Work out 38 − 26 first. Find three more expressions with that answer.",
        "explanation": "48 ÷ 4 = 12; 38 − 26 = 12; 10 + 2 = 12; 49 − 37 = 12. All four have the same value."
      }
    ]
  },
  {
    "id": "maths-46",
    "title": "Number Connections 46",
    "difficulty": "Year 3",
    "groups": [
      {
        "label": "Equals 56",
        "answer": 56,
        "words": [
          "44 + 12",
          "107 − 51",
          "45 + 11",
          "7 × 8"
        ],
        "hint": "The four expressions share an even answer. Different signs can lead to the same number.",
        "easierHint": "Work out 107 − 51 first. Find three more expressions with that answer.",
        "explanation": "44 + 12 = 56; 107 − 51 = 56; 45 + 11 = 56; 7 × 8 = 56. All four have the same value."
      },
      {
        "label": "Equals 27",
        "answer": 27,
        "words": [
          "54 ÷ 2",
          "10 + 17",
          "29 − 2",
          "7 + 20"
        ],
        "hint": "The four expressions share an odd answer. Different signs can lead to the same number.",
        "easierHint": "Work out 29 − 2 first. Find three more expressions with that answer.",
        "explanation": "54 ÷ 2 = 27; 10 + 17 = 27; 29 − 2 = 27; 7 + 20 = 27. All four have the same value."
      },
      {
        "label": "Equals 14",
        "answer": 14,
        "words": [
          "56 ÷ 4",
          "35 − 21",
          "4 + 10",
          "70 − 56"
        ],
        "hint": "The four expressions share an even answer. Different signs can lead to the same number.",
        "easierHint": "Work out 35 − 21 first. Find three more expressions with that answer.",
        "explanation": "56 ÷ 4 = 14; 35 − 21 = 14; 4 + 10 = 14; 70 − 56 = 14. All four have the same value."
      },
      {
        "label": "Equals 34",
        "answer": 34,
        "words": [
          "48 − 14",
          "94 − 60",
          "26 + 8",
          "36 − 2"
        ],
        "hint": "The four expressions share an even answer. Different signs can lead to the same number.",
        "easierHint": "Work out 48 − 14 first. Find three more expressions with that answer.",
        "explanation": "48 − 14 = 34; 94 − 60 = 34; 26 + 8 = 34; 36 − 2 = 34. All four have the same value."
      }
    ]
  },
  {
    "id": "maths-47",
    "title": "Number Connections 47",
    "difficulty": "Year 3",
    "groups": [
      {
        "label": "Equals 19",
        "answer": 19,
        "words": [
          "51 − 32",
          "41 − 22",
          "2 + 17",
          "38 ÷ 2"
        ],
        "hint": "The four expressions share an odd answer. Different signs can lead to the same number.",
        "easierHint": "Work out 51 − 32 first. Find three more expressions with that answer.",
        "explanation": "51 − 32 = 19; 41 − 22 = 19; 2 + 17 = 19; 38 ÷ 2 = 19. All four have the same value."
      },
      {
        "label": "Equals 17",
        "answer": 17,
        "words": [
          "12 + 5",
          "51 − 34",
          "68 ÷ 4",
          "37 − 20"
        ],
        "hint": "The four expressions share an odd answer. Different signs can lead to the same number.",
        "easierHint": "Work out 51 − 34 first. Find three more expressions with that answer.",
        "explanation": "12 + 5 = 17; 51 − 34 = 17; 68 ÷ 4 = 17; 37 − 20 = 17. All four have the same value."
      },
      {
        "label": "Equals 31",
        "answer": 31,
        "words": [
          "54 − 23",
          "50 − 19",
          "9 + 22",
          "18 + 13"
        ],
        "hint": "The four expressions share an odd answer. Different signs can lead to the same number.",
        "easierHint": "Work out 54 − 23 first. Find three more expressions with that answer.",
        "explanation": "54 − 23 = 31; 50 − 19 = 31; 9 + 22 = 31; 18 + 13 = 31. All four have the same value."
      },
      {
        "label": "Equals 12",
        "answer": 12,
        "words": [
          "22 − 10",
          "9 + 3",
          "3 × 4",
          "18 − 6"
        ],
        "hint": "The four expressions share an even answer. Different signs can lead to the same number.",
        "easierHint": "Work out 22 − 10 first. Find three more expressions with that answer.",
        "explanation": "22 − 10 = 12; 9 + 3 = 12; 3 × 4 = 12; 18 − 6 = 12. All four have the same value."
      }
    ]
  },
  {
    "id": "maths-48",
    "title": "Number Connections 48",
    "difficulty": "Year 3",
    "groups": [
      {
        "label": "Equals 30",
        "answer": 30,
        "words": [
          "10 × 3",
          "9 + 21",
          "15 + 15",
          "67 − 37"
        ],
        "hint": "The four expressions share an even answer. Different signs can lead to the same number.",
        "easierHint": "Work out 67 − 37 first. Find three more expressions with that answer.",
        "explanation": "10 × 3 = 30; 9 + 21 = 30; 15 + 15 = 30; 67 − 37 = 30. All four have the same value."
      },
      {
        "label": "Equals 26",
        "answer": 26,
        "words": [
          "76 − 50",
          "2 + 24",
          "64 − 38",
          "52 ÷ 2"
        ],
        "hint": "The four expressions share an even answer. Different signs can lead to the same number.",
        "easierHint": "Work out 76 − 50 first. Find three more expressions with that answer.",
        "explanation": "76 − 50 = 26; 2 + 24 = 26; 64 − 38 = 26; 52 ÷ 2 = 26. All four have the same value."
      },
      {
        "label": "Equals 42",
        "answer": 42,
        "words": [
          "17 + 25",
          "57 − 15",
          "84 − 42",
          "56 − 14"
        ],
        "hint": "The four expressions share an even answer. Different signs can lead to the same number.",
        "easierHint": "Work out 57 − 15 first. Find three more expressions with that answer.",
        "explanation": "17 + 25 = 42; 57 − 15 = 42; 84 − 42 = 42; 56 − 14 = 42. All four have the same value."
      },
      {
        "label": "Equals 11",
        "answer": 11,
        "words": [
          "63 − 52",
          "8 + 3",
          "53 − 42",
          "44 ÷ 4"
        ],
        "hint": "The four expressions share an odd answer. Different signs can lead to the same number.",
        "easierHint": "Work out 63 − 52 first. Find three more expressions with that answer.",
        "explanation": "63 − 52 = 11; 8 + 3 = 11; 53 − 42 = 11; 44 ÷ 4 = 11. All four have the same value."
      }
    ]
  },
  {
    "id": "maths-49",
    "title": "Number Connections 49",
    "difficulty": "Year 3",
    "groups": [
      {
        "label": "Equals 32",
        "answer": 32,
        "words": [
          "4 + 28",
          "91 − 59",
          "4 × 8",
          "37 − 5"
        ],
        "hint": "The four expressions share an even answer. Different signs can lead to the same number.",
        "easierHint": "Work out 91 − 59 first. Find three more expressions with that answer.",
        "explanation": "4 + 28 = 32; 91 − 59 = 32; 4 × 8 = 32; 37 − 5 = 32. All four have the same value."
      },
      {
        "label": "Equals 10",
        "answer": 10,
        "words": [
          "20 − 10",
          "57 − 47",
          "50 ÷ 5",
          "3 + 7"
        ],
        "hint": "The four expressions share an even answer. Different signs can lead to the same number.",
        "easierHint": "Work out 20 − 10 first. Find three more expressions with that answer.",
        "explanation": "20 − 10 = 10; 57 − 47 = 10; 50 ÷ 5 = 10; 3 + 7 = 10. All four have the same value."
      },
      {
        "label": "Equals 48",
        "answer": 48,
        "words": [
          "66 − 18",
          "7 + 41",
          "46 + 2",
          "98 − 50"
        ],
        "hint": "The four expressions share an even answer. Different signs can lead to the same number.",
        "easierHint": "Work out 66 − 18 first. Find three more expressions with that answer.",
        "explanation": "66 − 18 = 48; 7 + 41 = 48; 46 + 2 = 48; 98 − 50 = 48. All four have the same value."
      },
      {
        "label": "Equals 33",
        "answer": 33,
        "words": [
          "12 + 21",
          "66 ÷ 2",
          "76 − 43",
          "23 + 10"
        ],
        "hint": "The four expressions share an odd answer. Different signs can lead to the same number.",
        "easierHint": "Work out 76 − 43 first. Find three more expressions with that answer.",
        "explanation": "12 + 21 = 33; 66 ÷ 2 = 33; 76 − 43 = 33; 23 + 10 = 33. All four have the same value."
      }
    ]
  },
  {
    "id": "maths-50",
    "title": "Number Connections 50",
    "difficulty": "Year 3",
    "groups": [
      {
        "label": "Equals 27",
        "answer": 27,
        "words": [
          "36 − 9",
          "11 + 16",
          "23 + 4",
          "9 × 3"
        ],
        "hint": "The four expressions share an odd answer. Different signs can lead to the same number.",
        "easierHint": "Work out 36 − 9 first. Find three more expressions with that answer.",
        "explanation": "36 − 9 = 27; 11 + 16 = 27; 23 + 4 = 27; 9 × 3 = 27. All four have the same value."
      },
      {
        "label": "Equals 17",
        "answer": 17,
        "words": [
          "85 ÷ 5",
          "35 − 18",
          "8 + 9",
          "58 − 41"
        ],
        "hint": "The four expressions share an odd answer. Different signs can lead to the same number.",
        "easierHint": "Work out 35 − 18 first. Find three more expressions with that answer.",
        "explanation": "85 ÷ 5 = 17; 35 − 18 = 17; 8 + 9 = 17; 58 − 41 = 17. All four have the same value."
      },
      {
        "label": "Equals 16",
        "answer": 16,
        "words": [
          "32 ÷ 2",
          "27 − 11",
          "2 + 14",
          "70 − 54"
        ],
        "hint": "The four expressions share an even answer. Different signs can lead to the same number.",
        "easierHint": "Work out 27 − 11 first. Find three more expressions with that answer.",
        "explanation": "32 ÷ 2 = 16; 27 − 11 = 16; 2 + 14 = 16; 70 − 54 = 16. All four have the same value."
      },
      {
        "label": "Equals 37",
        "answer": 37,
        "words": [
          "68 − 31",
          "76 − 39",
          "33 + 4",
          "87 − 50"
        ],
        "hint": "The four expressions share an odd answer. Different signs can lead to the same number.",
        "easierHint": "Work out 68 − 31 first. Find three more expressions with that answer.",
        "explanation": "68 − 31 = 37; 76 − 39 = 37; 33 + 4 = 37; 87 − 50 = 37. All four have the same value."
      }
    ]
  }
];
});
