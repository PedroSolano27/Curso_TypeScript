// Teste do Client Http com Axios
import { AxiosHttpClient } from "./AxiosHttpClient";
import axios from "axios";
import { PostParams } from "Data/Protocols/Http/HttpPostClient";
import faker from "faker";

jest.mock("Axios");
const AxiosMock = axios as jest.Mocked <typeof axios>;                  // Faz um Mock de um Axios

function makeSut(): AxiosHttpClient {                                   // Cria um AxiosHttpClient
    return new AxiosHttpClient();
}
function mockRequest(): PostParams<any> {                               // Cria uma requisição POST falsa
    return {
        url: faker.internet.url(),
        body: faker.random.objectElement(),
    }    
}

describe('AxiosHttpClient', () => { 
    test('Should call axios with correct Verb, URL and Body', async() => {    // Testa se o Axios recebe os Parâmetros corretos
        const request = mockRequest();
        const sut = makeSut();
        await sut.post(request);
        expect (AxiosMock.post).toHaveBeenCalledWith(request.url, request.body);
    });
});