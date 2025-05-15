// Teste do Client Http com Axios
import { AxiosHttpClient } from "./AxiosHttpClient";
import axios from "axios";
import faker from "faker";

jest.mock("Axios");
const AxiosMock = axios as jest.Mocked <typeof axios>;

describe('AxiosHttpClient', () => { 
    test('Should call axios with correct URL', async() => {
        const url = faker.internet.url()
        const sut = new AxiosHttpClient();
        await sut.post({ url });
        expect (AxiosMock).toHaveBeenCalledWith({url});
    });
});