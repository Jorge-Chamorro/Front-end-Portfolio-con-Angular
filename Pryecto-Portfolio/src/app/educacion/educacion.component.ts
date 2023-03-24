import { Component, ComponentFactoryResolver, OnInit, ViewChild } from '@angular/core';
import { DataServiceService } from '../data-service.service';
import { Interfaz_educacion } from '../interfaces/Interfaz_educacion';
import { NgForm } from '@angular/forms';
import { Router } from '@angular/router';
import { LoginuserserviceService } from '../loginuserservice.service';

@Component({
  selector: 'app-educacion',
  templateUrl: './educacion.component.html',
  styleUrls: ['./educacion.component.css']
})


export class EducacionComponent implements OnInit {

@ViewChild('formulario') formulario!:NgForm;

  dataEducacion:Interfaz_educacion[] = [];
  editando = false;
  agregando = false;
  itemAModificar:Interfaz_educacion = {
    
    institucion: '',
    titulo: '',
    fecha_inicio: '',
    fecha_final: '',
    url_titulo: '',
    descripcion: ''
    }
  educacionNueva:Interfaz_educacion = {
    
    institucion: '',
    titulo: '',
    fecha_inicio: '',
    fecha_final: '',
    url_titulo: '',
    descripcion: ''
    }

  isLoggedG: boolean = false;

    


  constructor( private dataService: DataServiceService, private router: Router, private loginService: LoginuserserviceService) {   }

  ngOnInit(): void {

   this.dataService.geteducacion().subscribe(data => this.dataEducacion = data);
   this.loginService.getVariable().subscribe(variable => { this.isLoggedG = variable });
    
  }


  openEditForm(item:Interfaz_educacion) {
    this.itemAModificar = item;
        this.editando = true;
        console.log("La variable isLoggedG en el componente educacion es:" + this.isLoggedG);
  }

  guardarEducacion() {
    console.log("item a modificar= " + JSON.stringify(this.itemAModificar));
    this.dataService.guardarEducacion(this.itemAModificar).subscribe();
    this.editando = false;
    }

  cancelEdition() {
    this.dataService.geteducacion().subscribe(data => this.dataEducacion = data);
    this.editando = false;
  }

  openNewForm() {
    this.agregando = true;
  }

  cancelNew() {
    this.agregando = false;
  }

  agregarEducacion() {
       console.log("envio este objeto:" + JSON.stringify(this.educacionNueva));
       this.dataService.agregarEducacion(this.educacionNueva).subscribe(
       () => {
        this.dataService.geteducacion().subscribe(data => this.dataEducacion = data);
        
         console.log("array en la base de datos:" + JSON.stringify(this.dataEducacion));
         this.formulario.reset();
         this.agregando = false;
         this.router.navigate(['route3']);
             }
       )
  }

 

  deleteEducacion(educacion: Interfaz_educacion) {
    console.log("Registro a eliminar: " + JSON.stringify(educacion));
    this.dataService.deleteEducacion(educacion).subscribe( 
      () => {
        const index = this.dataEducacion.findIndex( e => e.id === educacion.id);
        this.dataEducacion.splice(index, 1);
        },
        error => {
          console.log("error al eliminar el registro", error);
        }
      
    )

  }

}
