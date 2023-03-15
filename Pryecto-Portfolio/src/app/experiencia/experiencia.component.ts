import { Component, OnInit, ViewChild } from '@angular/core';
import { DataServiceService } from '../data-service.service';
import { Interfaz_experiencia } from '../interfaces/Interfaz_experiencia';
import { NgForm } from '@angular/forms';

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
  itemAModificar:number = 0;
  experienciaNueva: Interfaz_experiencia = {
    id: 0,
    empresa: '',
    url_foto_empresa: '',
    descripcion: '',
    trabajo_actual: false,
    fecha_inicio: '',
    fecha_final: '',
    id_persona: 1
  }
  ultimoId:number = 1;

  constructor( private dataService: DataServiceService) { }

  ngOnInit(): void {
    this.dataService.getexperiencia().subscribe( data => this.dataExperiencia = data)
  }

  openEditForm(item:number) {
    this.itemAModificar = item;
    this.editando = true;
    console.log( "El item que paso es el: " + item)
  }

  guardarExperiencia( ) {
    this.dataService.guardarExperiencia(this.dataExperiencia[this.itemAModificar - 1], this.itemAModificar).subscribe();
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
  
  agregarExperiencia() {
    this.ultimoId = this.dataExperiencia.length + 1;
    console.log("el id a agregar seria:" + this.ultimoId);
    this.experienciaNueva.id = this.ultimoId;
    console.log ("educacion a agregar" + this.experienciaNueva);

      this.dataService.agregarExperiencia(this.experienciaNueva).subscribe(
       registro => {

         this.dataExperiencia.push(registro);
         console.log("array en la base de datos:" + this.dataExperiencia);
         this.formulario.reset();
         this.agregando = false;
             }
      )
  }






}
