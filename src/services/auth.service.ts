import { Injectable } from '@angular/core';
import { HttpFactoryService } from './http-factory.service';
import { HttpClient } from '@angular/common/http';
import { AuthModel, AuthResultModel } from 'src/share/auth'
import { ErrorCheckerService } from './error-checker.service'

@Injectable({
  providedIn: 'root'
})
export class AuthService extends HttpFactoryService {

  constructor(protected http: HttpClient, private errorCheck: ErrorCheckerService) { 
    super(http, "/auth");
  }

  async login(authModel: AuthModel) {
    if (authModel.cpf != null) 
    { authModel.cpf = authModel.cpf.split(".").join("").replace("-", "") }
    else return ["CPF não pode estar vazio"];

    var errorMessage: string[]
    await this.post("", authModel).then((data: AuthResultModel) => {
      localStorage.setItem("token", data.token);
      return
    }, error => {
      errorMessage = this.errorCheck.checkError(error);
      console.error('FALHA', error)
    });

    return errorMessage
  }
}
