import { Component, OnInit, ViewChild } from '@angular/core';
import { DataServiceService } from '../data-service.service';
import { Interfaz_proyectos } from '../interfaces/Interfaz_proyectos';
import { NgForm } from '@angular/forms';
import { Router } from '@angular/router';
import { LoginuserserviceService } from '../loginuserservice.service';



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
  itemAModificar:Interfaz_proyectos = {
    
    nombre_proyecto: '',
    descripcion_proyecto: '',
    url_foto_proyecto: '',
    url_direccion_proyecto: ''
  }
  proyectoNuevo:Interfaz_proyectos = {
   
    nombre_proyecto: '',
    descripcion_proyecto: '',
    url_foto_proyecto: '',
    url_direccion_proyecto: ''
  }
  isLoggedG: boolean = false;

  constructor( private dataService: DataServiceService, private router:Router, private loginService: LoginuserserviceService) { }

  ngOnInit(): void {

    this.dataService.getproyectos().subscribe( data => this.dataUser = data);
    this.isLoggedG = this.loginService.getVariable();
  }

  openEditForm(item:Interfaz_proyectos) {
    this.itemAModificar = item;
    this.editando = true;
    console.log( "El item que paso es el: " + item)
  }

  guardarProyecto( ) {
    this.dataService.guardarProyecto(this.itemAModificar).subscribe();
    this.editando = false;
  }

  cancelEdition() {
    this.dataService.getproyectos().subscribe( data => this.dataUser = data);
    this.editando = false;
  }

  openNewForm() {
    this.agregando = true;
  }

  
  cancelNew() {
    this.agregando = false;
  }

  agregarProyecto() {
       this.dataService.agregarProyecto(this.proyectoNuevo).subscribe(
       () => {

         this.dataService.getproyectos().subscribe(data => this.dataUser = data)
         console.log("array en la base de datos:" + this.dataUser);
         this.formulario.reset();
         this.agregando = false;
         this.router.navigate(['route6']);
       }
      )
  }

  deleteProyecto(proyecto: Interfaz_proyectos) {
    console.log("Registro a eliminar: " + JSON.stringify(proyecto));
    this.dataService.deleteProyecto(proyecto).subscribe( 
      () => {
        const index = this.dataUser.findIndex( e => e.id === proyecto.id);
        this.dataUser.splice(index, 1);
        },
        error => {
          console.log("error al eliminar el registro", error);
        }
      
    )

  }

}
