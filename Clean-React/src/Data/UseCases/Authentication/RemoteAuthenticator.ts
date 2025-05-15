// Realiza a autenticação de usuário de forma remota
import { HttpPostClient } from "Data/Protocols/Http/HttpPostClient";
import { Authentication } from "Domain/UseCases/Authenticator";
import { HttpStatusCode } from "Data/Protocols/Http/HttpResponseClient";
import { InvalidCredencials } from "Domain/Errors/InvalidCredencialsError";

export class RemoteAuthenticator {
    constructor (
        private readonly url: string,
        private readonly PostClient: HttpPostClient,
    ) {}

    async auth(params: Authentication): Promise <void> {
        // Pega a resposta do POST
        const response = await this.PostClient.post({
            url: this.url,
            body: params
        });

        // Caso o erro seja 401 dá a mensagem de Credenciais inválidas
        switch(response.status) {
            case (HttpStatusCode.unauthorized): throw new InvalidCredencials; 
            default: return Promise.resolve()
        }
    }
}