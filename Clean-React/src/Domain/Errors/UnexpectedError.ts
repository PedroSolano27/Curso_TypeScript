// Erro genérico

export class UnexpectedError extends Error {
    constructor() {
        super("Ops! Ocorreu um erro!");
        this.name = "UnexpectedError";
    }
}