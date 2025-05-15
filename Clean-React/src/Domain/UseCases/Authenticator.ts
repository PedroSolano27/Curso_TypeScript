// Faz a autrnticação de usuários
import { AccountModel } from "Domain/Models/AccountModel";

type Authentication = {
    email: string,
    password: string,
};

export interface Authenticator {
    auth (params: Authentication): Promise <AccountModel>,
};