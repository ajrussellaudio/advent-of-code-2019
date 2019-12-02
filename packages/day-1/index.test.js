import { findFuelForModule, totalFuelForModules } from '.';

describe('findFuelForModule', () => {
    test('works', () => {
        expect(findFuelForModule(12)).toEqual(2);
        expect(findFuelForModule(14)).toEqual(2);
        expect(findFuelForModule(1969)).toEqual(966);
        expect(findFuelForModule(100756)).toEqual(50346);
    });
});

describe('totalFuelForModules', () => {
    test('finds the total for an array of modules', () => {
        expect(totalFuelForModules([12, 14])).toEqual(4);
        expect(totalFuelForModules([12, 14, 1969, 100756])).toEqual(2 + 2 + 966 + 50346);
    });
});
