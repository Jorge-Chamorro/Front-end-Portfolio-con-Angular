import { Component, OnInit } from '@angular/core';
import { DataServiceService } from '../data-service.service';
import { Interfaz_experiencia } from '../interfaces/Interfaz_experiencia';

@Component({
  selector: 'app-experiencia',
  templateUrl: './experiencia.component.html',
  styleUrls: ['./experiencia.component.css']
})
export class ExperienciaComponent implements OnInit {

  dataExperiencia: Interfaz_experiencia[]=[];
  editando = false;
  itemAModificar:number = 0;

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







}
