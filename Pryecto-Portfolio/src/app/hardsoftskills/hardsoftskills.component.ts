import { Component, OnInit, ViewChild } from '@angular/core';
import { DataServiceService } from '../data-service.service';
import { Interfaz_hyss } from '../interfaces/Interfaz_hyss';
import { NgForm } from '@angular/forms';

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
  itemAModificar:number = 0;
  skillNueva: Interfaz_hyss = {
    id: 0,
    skill: '',
    porcentaje: 0,
    subtitulo: '',
    color_inner: '',
    color_outer: '',
    id_persona: 1
  }
  ultimoId:number = 1;


  constructor( private dataService : DataServiceService) { }

  ngOnInit(): void {
    this.dataService.gethyss().subscribe( data => this.dataSkill = data)
  }


  openEditForm(item:number) {
    this.itemAModificar = item;
    this.editando = true;
   
  }

  guardarSkill( ) {
    this.dataService.guardarSkill(this.dataSkill[this.itemAModificar - 1], this.itemAModificar).subscribe();
    this.editando = false;
    console.log( "estoy pasando el objeto: ", this.dataSkill[this.itemAModificar - 1], this.itemAModificar)

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

  agregarSkill() {
    this.ultimoId = this.dataSkill.length + 1;
    console.log("el id a agregar seria:" + this.ultimoId);
    this.skillNueva.id = this.ultimoId;
    console.log ("educacion a agregar" + this.skillNueva);

      this.dataService.agregarSkill(this.skillNueva).subscribe(
       registro => {

         this.dataSkill.push(registro);
         console.log("array en la base de datos:" + this.dataSkill);
         this.formulario.reset();
         this.agregando = false;
             }
      )
  }


}
