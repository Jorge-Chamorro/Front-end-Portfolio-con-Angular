import { Component, ComponentFactoryResolver, OnInit } from '@angular/core';
import { DataServiceService } from '../data-service.service';
import { Interfaz_educacion } from '../interfaces/Interfaz_educacion';

@Component({
  selector: 'app-educacion',
  templateUrl: './educacion.component.html',
  styleUrls: ['./educacion.component.css']
})
export class EducacionComponent implements OnInit {

  dataEducacion:Interfaz_educacion[] = [];
  editando = false;
  itemAModificar:number = 0;



  constructor( private dataService: DataServiceService) {   }

  ngOnInit(): void {

    this.dataService.geteducacion().subscribe(data => this.dataEducacion = data);
    console.log(this.dataEducacion);
  }


  openEditForm(item:number) {
    this.itemAModificar = item;
    this.editando = true;
    console.log( "El item que paso es el: " + item)
  }

  guardarEducacion( ) {
    this.dataService.guardarEducacion(this.dataEducacion[this.itemAModificar - 1], this.itemAModificar).subscribe();
    this.editando = false;
    console.log( "estoy pasando el objeto: ", this.dataEducacion[this.itemAModificar - 1], this.itemAModificar)

  }

  cancelEdition() {
    this.editando = false;
  }



}
