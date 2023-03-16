import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Interfaz_persona } from './interfaces/Interfaz_persona';
import { Interfaz_educacion } from './interfaces/Interfaz_educacion';
import { Interfaz_experiencia } from './interfaces/Interfaz_experiencia';
import { Interfaz_hyss } from './interfaces/Interfaz_hyss';
import { Interfaz_proyectos } from './interfaces/Interfaz_proyectos';


const httpOptions = {
    Headers: new HttpHeaders ({
      'Content-Type':'application/json'
    })

  }


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

  getexperiencia(): Observable<Interfaz_experiencia[]> {
    return this.http.get<Interfaz_experiencia[]> (this.apiUrl + 'experiencia')
  }

  gethyss(): Observable<Interfaz_hyss[]> {
    return this.http.get<Interfaz_hyss[]> (this.apiUrl + 'hyss')
  }

  getproyectos(): Observable<Interfaz_proyectos[]> {
    return this.http.get<Interfaz_proyectos[]> (this.apiUrl + 'proyectos')
  }

  guardarPersona(persona: Interfaz_persona, usuarioId:number): Observable<Interfaz_persona> {
   return this.http.put<Interfaz_persona> (this.apiUrl + 'persona/' + usuarioId, persona);
  }

  guardarEducacion(educacion: Interfaz_educacion): Observable<Interfaz_educacion> {
   return this.http.put<Interfaz_educacion> (this.apiUrl + 'educacion/' + educacion.id, educacion); 
  }
        
  guardarExperiencia(experiencia: Interfaz_experiencia, idExperiencia:number): Observable<Interfaz_experiencia> {
    return this.http.put<Interfaz_experiencia> (this.apiUrl + 'experiencia/' + idExperiencia, experiencia);
   }
  

  guardarSkill(skill: Interfaz_hyss, idSkill:number): Observable<Interfaz_hyss> {
    return this.http.put<Interfaz_hyss> (this.apiUrl + 'hyss/' + idSkill, skill);
   }

  guardarProyecto(proyecto: Interfaz_proyectos, idProyecto:number): Observable<Interfaz_proyectos> {
    return this.http.put<Interfaz_proyectos> (this.apiUrl + 'proyectos/' + idProyecto, proyecto);
   }

   
   agregarEducacion(educacion: Interfaz_educacion): Observable<Interfaz_educacion> {
    return this.http.post<Interfaz_educacion>(this.apiUrl + 'educacion/', educacion); 
   }


   agregarExperiencia(experiencia: Interfaz_experiencia): Observable<Interfaz_experiencia> {
    return this.http.post<Interfaz_experiencia>(this.apiUrl + 'experiencia/', experiencia); 
   }

   agregarSkill(skill: Interfaz_hyss): Observable<Interfaz_hyss> {
    return this.http.post<Interfaz_hyss>(this.apiUrl + 'hyss/', skill); 
   }

   agregarProyecto(proyecto: Interfaz_proyectos): Observable<Interfaz_proyectos> {
    return this.http.post<Interfaz_proyectos>(this.apiUrl + 'proyectos/', proyecto); 
   }

   deleteEducacion(idABorrar:number): Observable<Interfaz_educacion>{
    return this.http.delete<Interfaz_educacion>(this.apiUrl + 'educacion/' + idABorrar)
  }


}
