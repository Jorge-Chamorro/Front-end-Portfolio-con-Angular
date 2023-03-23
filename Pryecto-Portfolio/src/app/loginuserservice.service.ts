import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable, observable, of, Subject } from 'rxjs';
import { User } from './user';

@Injectable({
  providedIn: 'root'
})

export class LoginuserserviceService {

  private url="http://localhost:8080/user/login";
  private isLoggedG:boolean = false;
  private isLoggedGSubject = new Subject<boolean>();


  constructor(private httpClient: HttpClient) { }

  loginUser(user: User):Observable<object>{
    console.log(user);
    return this.httpClient.post(`${this.url}`, user);
  }



  setVariable(valor:boolean){
    console.log("set variable funciona");
    this.isLoggedG = valor;
    this.isLoggedGSubject.next(this.isLoggedG);
    console.log("el valor de isLoggeG es:" + this.isLoggedG);




    // console.log("set variable funciona");
    // this.isLoggedG = valor;
    // console.log("el valor de isLoggeG es:" + this.isLoggedG);
  }

  getVariable():Observable<boolean> {
    return of(this.isLoggedG);
  }

  get isLoggedG$(): Observable<boolean> {
    return this.isLoggedGSubject.asObservable();
  }


}
