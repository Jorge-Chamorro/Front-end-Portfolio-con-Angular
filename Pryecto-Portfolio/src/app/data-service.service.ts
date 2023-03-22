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

  private apiUrl = 'http://localhost:8080/';

  private apiUrlVieja = 'http://localhost:3000/'
  

  constructor(private http : HttpClient) { }

  getpersona(): Observable<Interfaz_persona> {
    return this.http.get<Interfaz_persona> (this.apiUrl + 'personas/get/perfil');
  
  }
  geteducacion(): Observable<Interfaz_educacion[]> {
    return this.http.get<Interfaz_educacion[]> (this.apiUrl + 'educacion/get');
  
  }

  getexperiencia(): Observable<Interfaz_experiencia[]> {
    return this.http.get<Interfaz_experiencia[]> (this.apiUrl + 'experiencia/get')
  }

  gethyss(): Observable<Interfaz_hyss[]> {
    return this.http.get<Interfaz_hyss[]> (this.apiUrl + 'hyss/get')
  }

  getproyectos(): Observable<Interfaz_proyectos[]> {
    return this.http.get<Interfaz_proyectos[]> (this.apiUrl + 'proyectos/get')
  }  

  guardarPersona(persona: Interfaz_persona): Observable<Interfaz_persona> {
    return this.http.put<Interfaz_persona> (this.apiUrl + 'personas/put/' + persona.id, persona);
  }

  guardarEducacion(educacion: Interfaz_educacion): Observable<Interfaz_educacion> {
    console.log(JSON.stringify(educacion));
    return this.http.put<Interfaz_educacion> (this.apiUrl + 'educacion/put/' + educacion.id, educacion); 
  
  }
        
  guardarExperiencia(experiencia: Interfaz_experiencia): Observable<Interfaz_experiencia> {
    return this.http.put<Interfaz_experiencia> (this.apiUrl + 'experiencia/put/' + experiencia.id, experiencia);
   }
  

  guardarSkill(skill: Interfaz_hyss): Observable<Interfaz_hyss> {
    return this.http.put<Interfaz_hyss> (this.apiUrl + 'hyss/put/' + skill.id, skill);
   }

  guardarProyecto(proyecto: Interfaz_proyectos): Observable<Interfaz_proyectos> {
    return this.http.put<Interfaz_proyectos> (this.apiUrl + 'proyectos/put/' + proyecto.id, proyecto);
   }

   
   agregarEducacion(educacion: Interfaz_educacion): Observable<Interfaz_educacion> {
    return this.http.post<Interfaz_educacion>(this.apiUrl + 'educacion/post', educacion); 
   }


   agregarExperiencia(experiencia: Interfaz_experiencia): Observable<Interfaz_experiencia> {
    return this.http.post<Interfaz_experiencia>(this.apiUrl + 'experiencia/post', experiencia); 
   }

   agregarSkill(skill: Interfaz_hyss): Observable<Interfaz_hyss> {
    return this.http.post<Interfaz_hyss>(this.apiUrl + 'hyss/post', skill); 
   }

   agregarProyecto(proyecto: Interfaz_proyectos): Observable<Interfaz_proyectos> {
    return this.http.post<Interfaz_proyectos>(this.apiUrl + 'proyectos/post', proyecto); 
   }

   deleteEducacion(educacion: Interfaz_educacion): Observable<Interfaz_educacion>{
    return this.http.delete<Interfaz_educacion>(this.apiUrl + 'educacion/delete/'+ educacion.id)
   }

   deleteExperiencia(educacion: Interfaz_experiencia): Observable<Interfaz_experiencia>{
    return this.http.delete<Interfaz_experiencia>(this.apiUrl + 'experiencia/delete/'+ educacion.id)
   }

   deleteSkill(skill: Interfaz_hyss): Observable<Interfaz_hyss>{
    return this.http.delete<Interfaz_hyss>(this.apiUrl + 'hyss/delete/'+ skill.id)
   }

   deleteProyecto(proyecto: Interfaz_proyectos): Observable<Interfaz_proyectos>{
    return this.http.delete<Interfaz_proyectos>(this.apiUrl + 'proyectos/delete/'+ proyecto.id)
   }

}
