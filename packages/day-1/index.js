import answerLogger from '../answerLogger';
import data from './data.json';

export const findFuelForModule = (mass) => {
    const fuelForMass = Math.floor(mass / 3) - 2;
    if (fuelForMass <= 0) return 0;
    return fuelForMass + findFuelForModule(fuelForMass);
};

export const totalFuelForModules = (modules) => modules.reduce((total, module) => total + findFuelForModule(module), 0);

answerLogger(1, totalFuelForModules(data));
