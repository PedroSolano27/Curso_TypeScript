// Client Http com Axios
import { PostParams } from "Data/Protocols/Http/HttpPostClient";
import axios from "axios";

export class AxiosHttpClient {
    async post (params: PostParams <any>): Promise <void> {
        await axios({url: params.url});
    }
}