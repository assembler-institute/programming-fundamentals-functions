const exercise18 = require('../18-exercise');

describe('18-exercise', () => {
    test('use recursion to create the Fibonacci sequence until it reatches the number of loops requested (7 loops and recieve the result 34)', () => {
        expect(exercise18(7)).toBe(34);
    });
});
