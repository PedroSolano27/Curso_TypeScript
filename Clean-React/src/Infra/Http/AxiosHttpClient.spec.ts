// Teste do Client Http com Axios
import { AxiosHttpClient } from "./AxiosHttpClient";
import axios from "axios";
import { PostParams } from "Data/Protocols/Http/HttpPostClient";
import faker from "faker";

jest.mock("Axios");
const AxiosMock = axios as jest.Mocked <typeof axios>;                          // Faz um Mock de um Axios

function makeSut(): AxiosHttpClient {                                           // Cria um AxiosHttpClient
    return new AxiosHttpClient();
}
function mockRequest(): PostParams<any> {                                       // Cria uma requisição POST falsa
    return {
        url: faker.internet.url(),
        body: faker.random.objectElement(),
    }    
}
const mockedResult = {                                                          // Simula resultados de um POST
    data: faker.random.objectElement(),
    status: faker.random.number(),
}
AxiosMock.post.mockResolvedValue(mockedResult as Axios.AxiosXHR<any>);          // Faz um Mock do resultado de um POST

describe("AxiosHttpClient", () => { 
    test("Should call axios with correct Verb, URL and Body", async() => {      // Testa se o Axios recebe os Parâmetros corretos
        const request = mockRequest();
        const sut = makeSut();
        await sut.post(request);
        expect (AxiosMock.post).toHaveBeenCalledWith(request.url, request.body);
    });

    test("Should creturn correct Status and Body", async() => {                 // Testa se o Axios retorna os Parâmetros corretos
        const sut = makeSut();
        const response = await sut.post(mockRequest());
        expect (response).toEqual({
            status: mockedResult.status,
            body: mockedResult.data,
        });
    });
});