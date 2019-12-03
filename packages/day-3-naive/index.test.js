import {
    distance, split, layWire, layPath, findCrossovers, manhattanDistance,
} from '.';

describe('distance', () => {
    test('example', () => {
        const paths = 'R8,U5,L5,D3\nU7,R6,D4,L4';
        expect(distance(paths)).toEqual(6);
    });

    test('first test case', () => {
        const paths = 'R75,D30,R83,U83,L12,D49,R71,U7,L72\nU62,R66,U55,R34,D71,R55,D58,R83';
        expect(distance(paths)).toEqual(159);
    });

    test('second test case', () => {
        const paths = 'R98,U47,R26,D63,R33,U87,L62,D20,R33,U53,R51\nU98,R91,D20,R16,D67,R40,U7,R15,U6,R7';
        expect(distance(paths)).toEqual(135);
    });
});

describe('split', () => {
    test('splits a pair of paths into arrays of strings', () => {
        const paths = 'R8,U5,L5,D3\nU7,R6,D4,L4';
        const expected = [
            ['R8', 'U5', 'L5', 'D3'],
            ['U7', 'R6', 'D4', 'L4'],
        ];
        expect(split(paths)).toEqual(expected);
    });
});

describe('layWire', () => {
    test('going right', () => {
        expect(layWire([0, 0], 'R3')).toEqual([
            [1, 0],
            [2, 0],
            [3, 0],
        ]);
    });

    test('going right, not from centre', () => {
        expect(layWire([10, 69], 'R3')).toEqual([
            [11, 69],
            [12, 69],
            [13, 69],
        ]);
    });

    test('going left', () => {
        expect(layWire([0, 0], 'L3')).toEqual([
            [-1, 0],
            [-2, 0],
            [-3, 0],
        ]);
    });

    test('going up', () => {
        expect(layWire([0, 0], 'U3')).toEqual([
            [0, 1],
            [0, 2],
            [0, 3],
        ]);
    });

    test('going down', () => {
        expect(layWire([0, 0], 'D3')).toEqual([
            [0, -1],
            [0, -2],
            [0, -3],
        ]);
    });
});

describe('layPath', () => {
    test('fills an array with coords occupied by a wire', () => {
        const path = ['R8', 'U5', 'L5', 'D3'];
        const expected = [
            [1, 0],
            [2, 0],
            [3, 0],
            [4, 0],
            [5, 0],
            [6, 0],
            [7, 0],
            [8, 0],
            [8, 1],
            [8, 2],
            [8, 3],
            [8, 4],
            [8, 5],
            [7, 5],
            [6, 5],
            [5, 5],
            [4, 5],
            [3, 5],
            [3, 4],
            [3, 3],
            [3, 2],
        ];
        expect(layPath(path)).toEqual(expected);
    });
});

describe('findCrossovers', () => {
    test('returns the coords shared by two paths', () => {
        const paths = [
            [[0, 1], [0, 2], [0, 3]],
            [[2, 2], [1, 2], [0, 2]],
        ];
        expect(findCrossovers(...paths)).toEqual([[0, 2]]);
    });
});

describe('manhattanDistance', () => {
    test('finds the Manhattan distance of a coord from origin', () => {
        expect(manhattanDistance([0, 3])).toEqual(3);
        expect(manhattanDistance([3, 3])).toEqual(6);
        expect(manhattanDistance([-3, 3])).toEqual(6);
        expect(manhattanDistance([-3, -3])).toEqual(6);
    });
});
