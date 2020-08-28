import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { environment } from 'src/environments/environment'

@Injectable({
  providedIn: 'root'
})
export class HttpFactoryService {

  private route: string = ""

  constructor(protected http: HttpClient, protected controller: string) { 
    this.route = environment.apiUrl + controller
  }

  private getHeaders() : HttpHeaders {
    const headers: HttpHeaders = new HttpHeaders()
      .append("content-type", "application/json")
      .append("authorization", "Bearer " + localStorage.getItem("token") || "")
    return headers
  }

  protected get(url: string = "") : Promise<any> {
    return new Promise((resolve, reject) => {
      this.http.get(this.route + url ?? "", {headers: this.getHeaders()}).subscribe(data => {
        resolve(data)
      }, e => {
        reject(e)
      })
    })
  }

  protected post(url: string = "", body = {}) : Promise<any> {
    return new Promise((resolve, reject) => {
      this.http.post(this.route + url ?? "", body, {headers: this.getHeaders()}).subscribe(data => {
        resolve(data)
      }, e => {
        reject(e)
      })
    })
  }
}
