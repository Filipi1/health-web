import { Component, OnInit } from '@angular/core';
import { InputConfig, FormConfig } from 'src/share/form';

@Component({
  selector: 'app-auth',
  templateUrl: './auth.component.html',
  styleUrls: ['./auth.component.scss']
})
export class AuthComponent implements OnInit {

  teste: InputConfig = new InputConfig()

  formConfig: FormConfig = new FormConfig();

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

  constructor() { }

  fetchData(form: FormConfig) {
    this.formConfig = form;
    console.log('RESULT: ', this.formConfig)
  }

  ngOnInit(): void {
    this.teste.title = "sergio";
    this.teste.icon = "vpn_key";
  }

}
