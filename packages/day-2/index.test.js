import { Intcode } from '.';

describe('opcodeOne handler', () => {
    it('adds the values at two positions and writes the value to a third', () => {
        const program = [1, 2, 3, 30];
        const intcode = new Intcode(program);
        const result = intcode.run();
        expect(result[30]).toEqual(33);
    });
});

describe('opcodeOne handler', () => {
    it('adds the values at two positions and writes the value to a third', () => {
        const program = [2, 2, 3, 30];
        const intcode = new Intcode(program);
        const result = intcode.run();
        expect(result[30]).toEqual(90);
    });
});

describe('test cases', () => {
    it('returns the correct program for 1,0,0,0,99', () => {
        const program = [1, 0, 0, 0, 99];
        const intcode = new Intcode(program);
        const result = intcode.run();
        expect(result).toEqual([2, 0, 0, 0, 99]);
    });

    it('returns the correct program for 2,3,0,3,99', () => {
        const program = [2, 3, 0, 3, 99];
        const intcode = new Intcode(program);
        const result = intcode.run();
        expect(result).toEqual([2, 3, 0, 6, 99]);
    });

    it('returns the correct program for 2,4,4,5,99,0', () => {
        const program = [2, 4, 4, 5, 99, 0];
        const intcode = new Intcode(program);
        const result = intcode.run();
        expect(result).toEqual([2, 4, 4, 5, 99, 9801]);
    });

    it('returns the correct program for 1,1,1,4,99,5,6,0,99', () => {
        const program = [1, 1, 1, 4, 99, 5, 6, 0, 99];
        const intcode = new Intcode(program);
        const result = intcode.run();
        expect(result).toEqual([30, 1, 1, 4, 2, 5, 6, 0, 99]);
    });
});
