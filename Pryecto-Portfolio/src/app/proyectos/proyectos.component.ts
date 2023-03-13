import { Component, OnInit } from '@angular/core';
import { DataServiceService } from '../data-service.service';
import { Interfaz_proyectos } from '../interfaces/Interfaz_proyectos';

@Component({
  selector: 'app-proyectos',
  templateUrl: './proyectos.component.html',
  styleUrls: ['./proyectos.component.css']
})
export class ProyectosComponent implements OnInit {

  dataUser: Interfaz_proyectos[] = [];
  editando = false;
  itemAModificar:number = 0;

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

}
