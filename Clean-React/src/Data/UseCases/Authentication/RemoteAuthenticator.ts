// Realiza a autenticação de usuário de forma remota
import { HttpPostClient } from "Data/Protocols/Http/HttpPostClient";
import { Authentication, Authenticator } from "Domain/UseCases/Authenticator";
import { HttpStatusCode } from "Data/Protocols/Http/HttpResponseClient";
import { InvalidCredencialsError } from "Domain/Errors/InvalidCredencialsError";
import { UnexpectedError } from "Domain/Errors/UnexpectedError";
import { AccountModel } from "Domain/Models/AccountModel";

export class RemoteAuthenticator implements Authenticator{
    constructor (
        private readonly url: string,
        private readonly PostClient: HttpPostClient <Authentication, AccountModel>,
    ) {}

    async auth(params: Authentication): Promise <AccountModel> {
        // Pega a resposta do POST
        const response = await this.PostClient.post({
            url: this.url,
            body: params,
        });

        // Verifica o código e devolve a resposta apropriada
        switch(response.status) {
            case (HttpStatusCode.ok): return response.body;
            case (HttpStatusCode.unauthorized): throw new InvalidCredencialsError;
            default: throw new UnexpectedError; 
        }
    }
}