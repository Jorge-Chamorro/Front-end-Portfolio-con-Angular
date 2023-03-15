import { Component, OnInit, ViewChild } from '@angular/core';
import { DataServiceService } from '../data-service.service';
import { Interfaz_proyectos } from '../interfaces/Interfaz_proyectos';
import { NgForm } from '@angular/forms';



@Component({
  selector: 'app-proyectos',
   templateUrl: './proyectos.component.html',
  styleUrls: ['./proyectos.component.css']
})



export class ProyectosComponent implements OnInit {

  @ViewChild('formulario') formulario!:NgForm;


  
  dataUser: Interfaz_proyectos[] = [];
  editando = false;
  agregando = false;
  itemAModificar:number = 0;
  proyectoNuevo:Interfaz_proyectos = {
    id: 0,
    nombre_proyecto: '',
    descripcion_proyecto: '',
    url_foto_proyecto: '',
    url_direccion_proyecto: '',
    id_persona: 1
  }
  ultimoId:number = 2;

  constructor( private dataService: DataServiceService) { }

  ngOnInit(): void {

    this.dataService.getproyectos().subscribe( data => this.dataUser = data);

  }

  openEditForm(item:number) {
    this.itemAModificar = item;
    this.editando = true;
    console.log( "El item que paso es el: " + item)
  }

  guardarProyecto( ) {
    this.dataService.guardarProyecto(this.dataUser[this.itemAModificar - 1], this.itemAModificar).subscribe();
    this.editando = false;
    console.log( "estoy pasando el objeto: ", this.dataUser[this.itemAModificar - 1], this.itemAModificar)

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

  agregarProyecto() {
    this.ultimoId = this.dataUser.length + 1;
    console.log("el id a agregar seria:" + this.ultimoId);
    this.proyectoNuevo.id = this.ultimoId;
    console.log ("educacion a agregar" + this.proyectoNuevo);

      this.dataService.agregarProyecto(this.proyectoNuevo).subscribe(
       registro => {

         this.dataUser.push(registro);
         console.log("array en la base de datos:" + this.dataUser);
         this.formulario.reset();
         this.agregando = false;
             }
      )
  }

}
