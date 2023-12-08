import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { BehaviorSubject, Observable} from 'rxjs';
import { User } from './user';

@Injectable({
  providedIn: 'root'
})

export class LoginuserserviceService {

  private url="https://portfolio-rode.onrender.com/user/login";
  
  private isLoggedGSubject: BehaviorSubject<boolean> = new BehaviorSubject<boolean>(false); // behaviorSubject es un observable pero que tiene un valor inicial y que puede emitir valores, por se subject


  constructor(private httpClient: HttpClient) { }

  loginUser(user: User):Observable<object>{
    console.log(user);
    return this.httpClient.post(`${this.url}`, user);
  }

  setVariable(valor:boolean): void {
    console.log("set variable funciona");
    
    this.isLoggedGSubject.next(valor);
    //console.log("el valor de isLoggeG es:" + this.isLoggedG);
    // console.log("set variable funciona");
    // this.isLoggedG = valor;
    // console.log("el valor de isLoggeG es:" + this.isLoggedG);
  }

  getVariable():Observable<boolean> {
    
    return this.isLoggedGSubject;
  }

  get isLoggedG$(): Observable<boolean> {
    return this.isLoggedGSubject.asObservable();
  }


}
