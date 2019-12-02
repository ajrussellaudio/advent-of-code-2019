/* eslint-disable no-console */
import answerLogger from './answerLogger';

console.log = jest.fn();

describe('answerLogger', () => {
    it('logs a message with the answer', () => {
        answerLogger(2, 'ANSWER');
        expect(console.log).toBeCalledWith('The answer for day 2 is: ANSWER');
    });
});
