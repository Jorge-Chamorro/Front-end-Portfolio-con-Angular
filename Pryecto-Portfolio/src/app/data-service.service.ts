import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { InterfazPersona } from './InterfazPersona';

@Injectable({
  providedIn: 'root'
})
export class DataServiceService {

  private apiUrl = 'http://localhost:3000/persona';

  constructor(private http : HttpClient) { }

  getdata(): Observable<InterfazPersona[]> {
    return this.http.get<InterfazPersona[]> (this.apiUrl);
  
  }
 

}
