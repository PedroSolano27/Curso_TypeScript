// Teste do Client Http com Axios
import { AxiosHttpClient } from "./AxiosHttpClient";
import axios from "axios";
import { PostParams } from "Data/Protocols/Http/HttpPostClient";
import faker from "faker";

jest.mock("Axios");

function makeSut(): AxiosHttpClient {                                           // Cria um AxiosHttpClient
    return new AxiosHttpClient();
}
function mockRequest(): PostParams<any> {                                       // Cria uma requisição POST falsa
    return {
        url: faker.internet.url(),
        body: faker.random.objectElement(),
    }    
}
function mockAxios(): jest.Mocked <typeof axios> {                              // Cria um Mock do Axios
    const mockedAxios = axios as jest.Mocked <typeof axios>;
    const mockedResult = {
        data: faker.random.objectElement(),
        status: faker.random.number(),
    }
    
    mockedAxios.post.mockResolvedValue(mockedResult as Axios.AxiosXHR<any>);
    return mockedAxios;
}


describe("AxiosHttpClient", () => { 
    test("Should call axios with correct Verb, URL and Body", async() => {      // Testa se o Axios recebe o URL e Body corretos
        const request = mockRequest();
        const sut = makeSut();
        const mockedAxios = mockAxios();
        await sut.post(request);
        expect (mockedAxios.post).toHaveBeenCalledWith(request.url, request.body);
    });

    test("Should creturn correct Status and Body", async() => {                 // Testa se o Axios retorna o Status e Body corretos
        const sut = makeSut();
        const mockedAxios = mockAxios();
        const promise = sut.post(mockRequest());
        expect (promise).toEqual(mockedAxios.post.mock.results[0].value);
    });
});