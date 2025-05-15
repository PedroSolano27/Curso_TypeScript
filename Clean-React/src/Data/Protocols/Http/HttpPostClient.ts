// Client para método POST em http
import { HttpResponse } from "./HttpResponseClient"

export type PostParams <T> = {
    url: string
    body?: T
}

export interface HttpPostClient <T, R> {
    post (params: PostParams <T>): Promise <HttpResponse <R> >
}