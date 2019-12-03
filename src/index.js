import answerLogger from '../packages/answerLogger';
import { totalFuelForModules } from '../packages/day-1';
import { Intcode } from '../packages/day-2';
import dayOneData from '../data/day-1.json';
import dayTwoProgram from '../data/day-2.json';
import dayThreePaths from '../data/day-3.json';
import { distance } from '../packages/day-3-naive';

// Day 1
answerLogger(1, totalFuelForModules(dayOneData));

// Day 2
const reassign = (noun, verb, program = dayTwoProgram) => (
    [program[0], noun, verb, ...program.slice(3)]
);

let intcode = new Intcode(reassign(12, 2, dayTwoProgram));
let result = intcode.run();
answerLogger(2, result[0]);

const target = 19690720;
const noun = (Math.floor(target / 10000) - 25) / 36;
const verb = target - (Math.floor(target / 10000) * 10000) - 635;
intcode = new Intcode(reassign(noun, verb, dayTwoProgram));
result = intcode.run();
if (result[0] === target) {
    answerLogger(2, 100 * noun + verb);
}

// Day 3
answerLogger(3, distance(dayThreePaths));
