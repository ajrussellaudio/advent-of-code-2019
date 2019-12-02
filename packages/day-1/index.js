export const findFuel = (mass) => {
    const fuelForMass = Math.floor(mass / 3) - 2;
    if (fuelForMass <= 0) return 0;
    return fuelForMass + findFuel(fuelForMass);
};

export const totalFuelForModules = (modules) => modules.reduce((total, module) => total + findFuel(module), 0);
