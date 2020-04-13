const exercise09 = require('../09-exercise');

describe('09-exercise', () => {
    let logSpy = jest.spyOn(console, 'log');

    afterAll(() => {
        logSpy.mockRestore();
    });

    test('use a for loop to console.log the arguments of the function', () => {
        exercise09('hello', 'world');

        expect(logSpy).toBeCalledWith('hello');
        expect(logSpy).toBeCalledWith('world');

        exercise09(20, 'test-str');

        expect(logSpy).toBeCalledWith(20);
        expect(logSpy).toBeCalledWith('test-str');
    });
});
