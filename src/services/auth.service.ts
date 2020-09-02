import { Injectable } from '@angular/core';
import { HttpFactoryService } from './http-factory.service';
import { HttpClient } from '@angular/common/http';
import { AuthModel, AuthResultModel } from 'src/share/auth'
import { ErrorCheckerService } from './error-checker.service'
import { Router } from '@angular/router';

@Injectable({
  providedIn: 'root'
})
export class AuthService extends HttpFactoryService {

  constructor(protected http: HttpClient, private errorCheck: ErrorCheckerService, private router: Router) { 
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

  async isLoggedIn() : Promise<boolean> {
    return new Promise<boolean>((resolve) => {
      return localStorage.getItem('token') ? resolve(true) : resolve(false);
    })
  }

  async tokenCheck() {
    await this.get('/check').catch(() => {
      localStorage.removeItem('token');
      this.router.navigateByUrl('/');
    })

    return true;
  }
}