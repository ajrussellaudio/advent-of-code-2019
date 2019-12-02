import { findFuel, totalFuelForModules } from '.';

describe('findFuel', () => {
    test('works', () => {
        expect(findFuel(12)).toEqual(2);
        expect(findFuel(14)).toEqual(2);
        expect(findFuel(1969)).toEqual(966);
        expect(findFuel(100756)).toEqual(50346);
    });
});

describe('totalFuelForModules', () => {
    test('finds the total for an array of modules', () => {
        expect(totalFuelForModules([12, 14])).toEqual(4);
        expect(totalFuelForModules([12, 14, 1969, 100756])).toEqual(2 + 2 + 966 + 50346);
    });
});
