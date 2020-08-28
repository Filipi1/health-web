import { UserModel } from 'src/share/user'

export class AuthModel {
    cpf: string
    password: string
};

export class AuthResultModel {
    user: UserModel
    token: string
    expires: string
}