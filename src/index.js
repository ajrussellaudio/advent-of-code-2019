import answerLogger from '../packages/answerLogger';
import { totalFuelForModules } from '../packages/day-1';
import dayOneData from '../data/day-1.json';

answerLogger(1, totalFuelForModules(dayOneData));
