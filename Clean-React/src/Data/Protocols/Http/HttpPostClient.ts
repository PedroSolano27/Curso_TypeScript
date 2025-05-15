// Client para método POST em http
import { HttpResponse } from "./HttpResponseClient"

export type PostParams = {
    url: string
    body?: object
}

export interface HttpPostClient {
    post (params: PostParams): Promise <HttpResponse>
}