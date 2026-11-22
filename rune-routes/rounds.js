// Rune Routes: compact classroom round bank. The target is the shared centre.
(function () {
  'use strict';

  const link = (id, label, prompt, options, answer) => ({id, label, prompt, options, answer});

  window.RUNE_ROUNDS = [
    {
      id: 'ridge-48', title: 'Ember Ridge', level: 'Core', target: 48,
      links: [
        link('factor', 'Missing factor', '6 × □ = 48', [7, 9, 8, 6], 8),
        link('groups', 'Equal groups', '48 ÷ 6 = □', [6, 8, 12, 7], 8),
        link('fraction', 'Fraction of 48', 'One quarter of 48 is □.', [24, 16, 8, 12], 12),
        link('next', 'Next multiple', 'What is the first multiple of 6 greater than 48?', [54, 52, 56, 42], 54),
        link('previous', 'Previous multiple', 'What is the greatest multiple of 8 less than 48?', [32, 56, 40, 44], 40),
        link('part-product', 'Build 48', '(5 × 8) + □ = 48', [6, 16, 10, 8], 8)
      ],
      falseConnection: {
        prompt: 'A rune says: “48 is a multiple of 7 because 48 is between 42 and 49.” Why does that connection fail?',
        options: [
          'Multiples of 7 must end in 7.',
          '42 and 49 are consecutive multiples of 7. There is no multiple of 7 between them.',
          'A number can only be a multiple of one number.',
          '42 and 49 are consecutive multiples of 8.'
        ],
        answer: 1,
        explanation: '7 × 6 = 42 and 7 × 7 = 49. Those are consecutive multiples of 7, so 48 is not on the 7-times table.'
      }
    },
    {
      id: 'grove-36', title: 'Moonroot Grove', level: 'Core', target: 36,
      links: [
        link('factor', 'Missing factor', '□ × 9 = 36', [4, 6, 3, 8], 4),
        link('groups', 'Equal groups', 'Put 36 stones into 4 equal groups. How many go in each group?', [12, 8, 6, 9], 9),
        link('fraction', 'Fraction of 36', 'One third of 36 is □.', [9, 18, 12, 6], 12),
        link('next', 'Next multiple', 'What is the first multiple of 4 greater than 36?', [45, 40, 32, 38], 40),
        link('previous', 'Previous multiple', 'What is the greatest multiple of 9 less than 36?', [18, 32, 45, 27], 27),
        link('part-product', 'Build 36', '(5 × 6) + □ = 36', [6, 8, 9, 12], 6)
      ],
      falseConnection: {
        prompt: 'A rune says: “36 ÷ 4 = 8 because 4 × 8 brings you back to 36.” Why does that connection fail?',
        options: [
          '36 is odd, so it cannot be shared between 4 groups.',
          'To check division by 4, you must double the answer.',
          '4 × 8 is 32, not 36. You need 4 × 9.',
          '36 cannot be a multiple of both 4 and 9.'
        ],
        answer: 2,
        explanation: 'To check 36 ÷ 4, multiply the number in each group by 4. Eight gives 32; nine gives 36.'
      }
    },
    {
      id: 'observatory-80', title: 'Crystal Observatory', level: 'Stretch', target: 80,
      links: [
        link('percent', 'Percentage of 80', '25% of 80 is □.', [25, 40, 20, 2], 20),
        link('decimal-factor', 'Decimal of 80', '0.1 × 80 = □', [0.8, 8, 80, 800], 8),
        link('fraction', 'Fraction of 80', 'Three quarters of 80 is □.', [20, 40, 75, 60], 60),
        link('decimal-answer', 'Divide 80', '80 ÷ 100 = □', [0.8, 0.08, 8, 80], 0.8),
        link('next', 'Next multiple', 'What is the first multiple of 8 greater than 80?', [84, 88, 96, 72], 88),
        link('missing-percent', 'What percentage?', '40 is □% of 80.', [40, 20, 25, 50], 50)
      ],
      falseConnection: {
        prompt: 'A rune says: “0.25 × 80 = 2 because 0.25 is 2.5%.” Why does that connection fail?',
        options: [
          '0.25 is 25%, so a quarter of 80 is 20.',
          '0.25 is 0.25%, so the answer is 0.2.',
          '0.25 is one half, so the answer is 40.',
          '25% of any number is always 25.'
        ],
        answer: 0,
        explanation: '0.25 is 25 hundredths, or 25%. A quarter of 80 is 20. It is 2.5% of 80 that equals 2.'
      }
    }
  ];
}());
