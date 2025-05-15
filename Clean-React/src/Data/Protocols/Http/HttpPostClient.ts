// Client para método POST em http

export interface HttpPostClient {
    post (url: string): Promise <void>
}