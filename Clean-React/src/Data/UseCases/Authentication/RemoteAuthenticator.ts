// Realiza a autenticação de usuário de forma remota
import { HttpPostClient } from "Data/Protocols/Http/HttpPostClient";
import { Authentication } from "Domain/UseCases/Authenticator";


export class RemoteAuthenticator {
    constructor (
        private readonly url: string,
        private readonly PostClient: HttpPostClient,
    ) {}

    async auth(params: Authentication): Promise <void> {
        await this.PostClient.post({
            url: this.url,
            body: params
        });
    }
}