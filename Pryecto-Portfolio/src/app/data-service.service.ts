import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Interfaz_persona } from './interfaces/Interfaz_persona';
import { Interfaz_educacion } from './interfaces/Interfaz_educacion';
import { Interfaz_experiencia } from './interfaces/Interfaz_experiencia';
import { Interfaz_hyss } from './interfaces/Interfaz_hyss';
import { Interfaz_proyectos } from './interfaces/Interfaz_proyectos';

@Injectable({
  providedIn: 'root'
})
export class DataServiceService {

  private apiUrl = 'http://localhost:3000/';

  constructor(private http : HttpClient) { }

  getpersona(): Observable<Interfaz_persona[]> {
    return this.http.get<Interfaz_persona[]> (this.apiUrl + 'persona');
  
  }
  geteducacion(): Observable<Interfaz_educacion[]> {
    return this.http.get<Interfaz_educacion[]> (this.apiUrl + 'educacion');
  
  }

 

}
