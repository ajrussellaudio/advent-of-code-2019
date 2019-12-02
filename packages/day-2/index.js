export class Intcode {
    constructor(program) {
        this.program = program;
    }

    run() {
        for (let i = 0; i < this.program.length; i += 4) {
            switch (this.program[i]) {
            case 1:
                this.opcodeOne(this.program.slice(i + 1, i + 4));
                break;
            case 2:
                this.opcodeTwo(this.program.slice(i + 1, i + 4));
                break;
            case 99:
                return this.program;
            default:
                break;
            }
        }
        return this.program;
    }

    opcodeOne(positions) {
        const [a, b, i] = positions;
        this.program[i] = this.program[a] + this.program[b];
    }

    opcodeTwo(positions) {
        const [a, b, i] = positions;
        this.program[i] = this.program[a] * this.program[b];
    }
}
