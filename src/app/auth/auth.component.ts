import { Component, OnInit } from '@angular/core';
import { FormConfig } from 'src/share/form';
import { AuthService } from 'src/services/auth.service'
import { AuthModel } from 'src/share/auth';

@Component({
  selector: 'app-auth',
  templateUrl: './auth.component.html',
  styleUrls: ['./auth.component.scss']
})
export class AuthComponent implements OnInit {

  formConfig: FormConfig = new FormConfig();
  errors = []

  form = {
    "form": {
      "cpf" : {
        "title": "CPF",
        "icon": "account_circle",
        "mask": "000.000.000-00"
      },
      "password": {
        "title": "Senha",
        "icon": "vpn_key",
        "isPassword": true,
        "type": "password"
      }
    }
  }

  constructor(protected authService: AuthService) { }

  async fetchData(form: FormConfig) {
    this.formConfig = form;

    var authModel: AuthModel = new AuthModel();
    authModel.cpf = this.formConfig.form["cpf"].value;
    authModel.password = this.formConfig.form["password"].value;

    this.errors = await this.authService.login(authModel)
    console.log('RESULT: ', this.formConfig)
  }

  ngOnInit(): void {}
}
