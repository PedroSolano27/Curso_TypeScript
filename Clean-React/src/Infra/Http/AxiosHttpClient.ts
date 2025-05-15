// Client Http com Axios
import { HttpPostClient, PostParams } from "Data/Protocols/Http/HttpPostClient";
import { HttpResponse } from "Data/Protocols/Http/HttpResponseClient";
import axios from "axios";

// Faz uma requisição de POST usando o Axios
export class AxiosHttpClient implements HttpPostClient <any, any> {   
    async post (params: PostParams <any>): Promise <HttpResponse <any> > {
        const response = await axios.post(params.url, params.body);
        
        return {
            status: response.status,
            body: response.data,
        };
    }
}