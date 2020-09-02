import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class ErrorCheckerService {

  protected errorMessage: string[] = []

  constructor() {}

  checkError(error) : string[] {
    if (error?.error?.message != null) {
      this.errorMessage = [ error.error.message ];
      return this.errorMessage;
    }

    if (error?.error?.errors != null) {
      this.errorMessage = error.error.errors
      return this.errorMessage;
    }

    switch (error.status) {
      case 0:
        this.errorMessage = ["Servidor offline, tente novamente mais tarde."]
        break;
      case 404:
        this.errorMessage = ["Requisição não encontrada"]
        break;
      case 500:
        this.errorMessage = ["Ocorreu uma falha ao processar sua requisição"]
        break;
      default:
        this.errorMessage = ["Ocorreu uma falha inesperada."]
    }

    return this.errorMessage
  } 
}
