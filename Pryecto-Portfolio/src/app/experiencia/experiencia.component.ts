import { Component, OnInit, ViewChild } from '@angular/core';
import { DataServiceService } from '../data-service.service';
import { Interfaz_experiencia } from '../interfaces/Interfaz_experiencia';
import { NgForm } from '@angular/forms';
import { Router } from '@angular/router';
import { LoginuserserviceService } from '../loginuserservice.service';

@Component({
  selector: 'app-experiencia',
  templateUrl: './experiencia.component.html',
  styleUrls: ['./experiencia.component.css']
})
export class ExperienciaComponent implements OnInit {

@ViewChild('formulario') formulario!:NgForm;

  dataExperiencia: Interfaz_experiencia[]=[];
  editando = false;
  agregando = false;
  itemAModificar: Interfaz_experiencia = {
    id: 0,
    empresa: '',
    url_foto_empresa: '',
    descripcion: '',
    fecha_inicio: '',
    fecha_final: ''
  }
  experienciaNueva: Interfaz_experiencia = {
    id: 0,
    empresa: '',
    url_foto_empresa: '',
    descripcion: '',
    fecha_inicio: '',
    fecha_final: ''
  }
  
  isLoggedG: boolean = false;

  constructor( private dataService: DataServiceService, private router: Router, private loginService: LoginuserserviceService) { }

  ngOnInit(): void {
    this.dataService.getexperiencia().subscribe( data => this.dataExperiencia = data)
    this.isLoggedG = this.loginService.getVariable();
  }

  openEditForm(item:Interfaz_experiencia ) {
    this.itemAModificar = item;
    this.editando = true;
  }

  guardarExperiencia( ) {
    this.dataService.guardarExperiencia(this.itemAModificar).subscribe();
    this.editando = false;
    

  }

  cancelEdition() {
    this.dataService.getexperiencia().subscribe( data => this.dataExperiencia = data);
    this.editando = false;
  }

  openNewForm() {
    this.agregando = true;
  }

  cancelNew() {
    this.agregando = false;
  }
  
  agregarExperiencia() {
   
       this.dataService.agregarExperiencia(this.experienciaNueva).subscribe(
       () => {

         this.dataService.getexperiencia().subscribe(data => this.dataExperiencia = data);
         
         this.formulario.reset();
         this.agregando = false;
         this.router.navigate(['route4']);
             }
      )
  }

  deleteExperiencia(experiencia: Interfaz_experiencia) {
    this.dataService.deleteExperiencia(experiencia).subscribe(
      () => {
        const index = this.dataExperiencia.findIndex(e => e.id ===  experiencia.id);
        this.dataExperiencia.splice(index, 1);
      },
      error => {
        console.log("error al eliminar el registro", error);
      }
    )
  }




}
