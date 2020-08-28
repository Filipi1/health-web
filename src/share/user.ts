export class UserModel {
    id: string
    name: string
    email: string
    password: string
    cpf: string
    bornDate: Date
    cellphone: string
    idade: Number
    sexo: string
    exams: any
    addressId: Number
    address: any
    active: boolean
    roleId: Number
    role: RoleModel
}

export class RoleModel {
    id: Number
    name: string
    badge: string
}