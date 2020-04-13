const exercise03 = require('../03-exercise');

describe('03-exercise', () => {
    test('write a function that returns the "globalVariable"', () => {
        expect(exercise03()).toBe('this-is-a-global-variable');
    });
});
