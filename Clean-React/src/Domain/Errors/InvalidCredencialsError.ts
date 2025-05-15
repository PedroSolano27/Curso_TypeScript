// Erro de credenciais inválidas

export class InvalidCredencials extends Error {
    constructor() {
        super("Credenciais inválidas!");
        this.name = "InvalidCredencials";
    }
}