// Implementação mock do HttpPostClient.ts
import { HttpPostClient } from "../Http/HttpPostClient";

export class HttpPostClientMock implements HttpPostClient {
    url?: string;
    
    async post(url: string): Promise <void> {
        this.url = url;
        return Promise.resolve();
    }
}