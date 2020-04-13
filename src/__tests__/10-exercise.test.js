const { exercise10Global, exercise10Inner } = require('../10-exercise');

describe('10-exercise', () => {
    let logSpy = jest.spyOn(console, 'log');

    afterAll(() => {
        logSpy.mockRestore();
    });

    test('use console.log inside and outside the function', () => {
        exercise10Global();
        expect(logSpy).toHaveBeenCalledWith('hello-world');

        exercise10Inner();
        expect(logSpy).toHaveBeenCalledWith('hola-mundo');
    });
});
