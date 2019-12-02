export class Intcode {
    constructor(program) {
        this.memory = program;
    }

    run() {
        for (let i = 0; i < this.memory.length; i += 4) {
            switch (this.memory[i]) {
            case 1:
                this.opcodeOne(this.memory.slice(i + 1, i + 4));
                break;
            case 2:
                this.opcodeTwo(this.memory.slice(i + 1, i + 4));
                break;
            case 99:
                return this.memory;
            default:
                break;
            }
        }
        return this.memory;
    }

    opcodeOne(addresses) {
        const [a, b, i] = addresses;
        this.memory[i] = this.memory[a] + this.memory[b];
    }

    opcodeTwo(addresses) {
        const [a, b, i] = addresses;
        this.memory[i] = this.memory[a] * this.memory[b];
    }
}
