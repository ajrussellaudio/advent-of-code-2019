import answerLogger from '../answerLogger';
import data from './data.json';

export const findFuelForModule = (mass) => Math.floor(mass / 3) - 2;

export const totalFuelForModules = (modules) => modules.reduce((total, module) => total + findFuelForModule(module), 0);

answerLogger(1, totalFuelForModules(data));
