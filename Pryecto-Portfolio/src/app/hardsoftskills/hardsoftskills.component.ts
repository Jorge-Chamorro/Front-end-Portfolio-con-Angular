import { Component, OnInit, ViewChild } from '@angular/core';
import { DataServiceService } from '../data-service.service';
import { Interfaz_hyss } from '../interfaces/Interfaz_hyss';
import { NgForm } from '@angular/forms';
import { Router } from '@angular/router';
import { LoginuserserviceService } from '../loginuserservice.service';

@Component({
  selector: 'app-hardsoftskills',
  templateUrl: './hardsoftskills.component.html',
  styleUrls: ['./hardsoftskills.component.css']
})
export class HardsoftskillsComponent implements OnInit {
  @ViewChild('formulario') formulario!:NgForm;

  dataSkill: Interfaz_hyss[] = [];
  editando = false;
  agregando = false;

  itemAModificar: Interfaz_hyss = {
  
    porcentaje: 0,
    subtitulo: '',
    color_inner: '',
    color_outer: ''
  }

  skillNueva: Interfaz_hyss = {
    
    porcentaje: 0,
    subtitulo: '',
    color_inner: '',
    color_outer: ''
  }

  isLoggedG: boolean = false;


  constructor( private dataService : DataServiceService, private router: Router, private loginService: LoginuserserviceService) { }

  ngOnInit(): void {
    this.dataService.gethyss().subscribe(data => this.dataSkill = data);
    this.loginService.getVariable().subscribe(variable => { this.isLoggedG = variable });
    // this.isLoggedG = this.loginService.getVariable();
  }


  openEditForm(item:Interfaz_hyss) {
    this.itemAModificar = item;
    this.editando = true;
   
  }

  guardarSkill( ) {
    this.dataService.guardarSkill(this.itemAModificar).subscribe();
    this.editando = false;
  }

  cancelEdition() {
    this.dataService.gethyss().subscribe(data => this.dataSkill = data)
    this.editando = false;
  }

  openNewForm() {
    this.agregando = true;
  }

  cancelNew() {
    this.agregando = false;
  }

  agregarSkill() {
      console.log("El objeto que mando es: " + JSON.stringify(this.skillNueva));
       this.dataService.agregarSkill(this.skillNueva).subscribe(
       () => {

         this.dataService.gethyss().subscribe(data => this.dataSkill = data);
         this.formulario.reset();
         this.agregando = false;
         //this.router.navigate(['route5']); Usando Rutas redirijo o actualizo
         window.location.href = "#h&sskills"; // Usando solo el href normal redirijo o actualizo
             }
      )
  }

  deleteSkill(skill: Interfaz_hyss) {
    this.dataService.deleteSkill(skill).subscribe( 
      () => {
        const index = this.dataSkill.findIndex( e => e.id === skill.id);
        this.dataSkill.splice(index, 1);
        },
        error => {
          console.log("error al eliminar el registro", error);
        }
    )
  }

}
