// Realiza a autenticação de usuário de forma remota
import { HttpPostClient } from "Data/Protocols/Http/HttpPostClient";


export class RemoteAuthenticator {
    constructor (
        private readonly url: string,
        private readonly PostClient: HttpPostClient,
    ) {}

    async auth(): Promise <void> {
        await this.PostClient.post(this.url);
    }
}