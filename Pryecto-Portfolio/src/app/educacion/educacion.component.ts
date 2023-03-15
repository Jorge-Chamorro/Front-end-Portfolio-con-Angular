import { Component, ComponentFactoryResolver, OnInit, ViewChild } from '@angular/core';
import { DataServiceService } from '../data-service.service';
import { Interfaz_educacion } from '../interfaces/Interfaz_educacion';
import { NgForm } from '@angular/forms';

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
  itemAModificar:number = 0;
  educacionNueva:Interfaz_educacion = {
    id: 1,
    institucion: '',
    titulo: '',
    fecha_inicio: '',
    fecha_final: '',
    url_titulo: '',
    descripcion: '',
    id_persona: 1
    }

    ultimoId:number = 2;


  constructor( private dataService: DataServiceService) {   }

  ngOnInit(): void {

    this.dataService.geteducacion().subscribe(data => this.dataEducacion = data);
    
  }


  openEditForm(item:number) {
    this.itemAModificar = item;
    this.editando = true;
    console.log( "El item que paso es el: " + item)
  }

  guardarEducacion( ) {
    this.dataService.guardarEducacion(this.dataEducacion[this.itemAModificar - 1], this.itemAModificar).subscribe();
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
    this.ultimoId = this.dataEducacion.length + 1;
    console.log("el id a agregar seria:" + this.ultimoId);
    this.educacionNueva.id = this.ultimoId;
    console.log ("educacion a agregar" + this.educacionNueva);

      this.dataService.agregarEducacion(this.educacionNueva).subscribe(
       registro => {

         this.dataEducacion.push(registro);
         console.log("array en la base de datos:" + this.dataEducacion);
         this.formulario.reset();
         this.agregando = false;
             }
      )
  }

}
