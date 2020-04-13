const exercise02 = require('../02-exercise');

describe('02-exercise', () => {
    test('write a function that receives 3 number parameters and returns their sum', () => {
        expect(exercise02(1, 2, 3)).toBe(6);
    });
});
