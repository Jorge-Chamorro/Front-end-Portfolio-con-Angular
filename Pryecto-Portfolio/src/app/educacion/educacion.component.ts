import { Component, ComponentFactoryResolver, OnInit, ViewChild } from '@angular/core';
import { DataServiceService } from '../data-service.service';
import { Interfaz_educacion } from '../interfaces/Interfaz_educacion';
import { NgForm } from '@angular/forms';
import { Router } from '@angular/router';

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
    id: 1,
    institucion: '',
    titulo: '',
    fecha_inicio: '',
    fecha_final: '',
    url_titulo: '',
    descripcion: ''
    }
  educacionNueva:Interfaz_educacion = {
    id: 1,
    institucion: '',
    titulo: '',
    fecha_inicio: '',
    fecha_final: '',
    url_titulo: '',
    descripcion: ''
    }

    ultimoId:number = 2;


  constructor( private dataService: DataServiceService, private router: Router) {   }

  ngOnInit(): void {

    this.dataService.geteducacion().subscribe(data => this.dataEducacion = data);
    
  }


  openEditForm(item:Interfaz_educacion) {
    this.itemAModificar = item;
    this.editando = true;
    console.log( "El item que paso es el: " + item)
  }

  guardarEducacion() {
    console.log("item a modificar= " + JSON.stringify(this.itemAModificar));
    this.dataService.guardarEducacion(this.itemAModificar).subscribe();
    this.editando = false;
    }

  cancelEdition() {
    this.editando = false;
  }

  openNewForm() {
    this.agregando = true;
  }

  cancelNew() {
    this.agregando = false;
  }

  agregarEducacion() {
    // this.ultimoId = this.dataEducacion.length + 1;
    // console.log("el id a agregar seria:" + this.ultimoId);
    // this.educacionNueva.id = this.ultimoId;
    // console.log ("educacion a agregar" + this.educacionNueva);

      this.dataService.agregarEducacion(this.educacionNueva).subscribe(
       () => {
        this.dataService.geteducacion().subscribe(data => this.dataEducacion = data);
        // registro => {
        //  console.log(JSON.stringify(registro));
         

        //  this.dataEducacion.push(registro);
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
