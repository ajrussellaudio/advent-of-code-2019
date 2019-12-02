import answerLogger from '../packages/answerLogger';
import { totalFuelForModules } from '../packages/day-1';
import { Intcode } from '../packages/day-2';
import dayOneData from '../data/day-1.json';
import dayTwoProgram from '../data/day-2.json';

// Day 1
answerLogger(1, totalFuelForModules(dayOneData));

// Day 2
dayTwoProgram[1] = 12;
dayTwoProgram[2] = 2;
const intcode = new Intcode(dayTwoProgram);
const result = intcode.run();
answerLogger(2, result[0]);
