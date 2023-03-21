import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable, observable } from 'rxjs';
import { User } from './user';

@Injectable({
  providedIn: 'root'
})
export class LoginuserserviceService {

  private url="http://localhost:8080/user/login";
  private isLoggedG:boolean = false;


  constructor(private httpClient: HttpClient) { }

  loginUser(user: User):Observable<object>{
    console.log(user);
    return this.httpClient.post(`${this.url}`, user);
  }

  setVariable(valor:boolean){
    this.isLoggedG = valor;
  }
  getVariable() {
    return this.isLoggedG;
  }

}
