// Implementação mock do HttpPostClient.ts
import { HttpPostClient, PostParams } from "../Http/HttpPostClient";

export class HttpPostClientMock implements HttpPostClient {
    url?: string;
    
    async post(params: PostParams): Promise <void> {
        this.url = params.url;
        return Promise.resolve();
    }
}