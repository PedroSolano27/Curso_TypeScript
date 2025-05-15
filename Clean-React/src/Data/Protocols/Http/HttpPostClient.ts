// Client para método POST em http
export type PostParams = {
    url: string
    body?: object
}

export interface HttpPostClient {
    post (params: PostParams): Promise <void>
}