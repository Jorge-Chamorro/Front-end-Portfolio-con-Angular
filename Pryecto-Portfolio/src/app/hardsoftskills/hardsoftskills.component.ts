import { Component, OnInit } from '@angular/core';
import { DataServiceService } from '../data-service.service';
import { Interfaz_hyss } from '../interfaces/Interfaz_hyss';

@Component({
  selector: 'app-hardsoftskills',
  templateUrl: './hardsoftskills.component.html',
  styleUrls: ['./hardsoftskills.component.css']
})
export class HardsoftskillsComponent implements OnInit {

  dataSkill: Interfaz_hyss[] = [];
  editando = false;
  itemAModificar:number = 0;


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

}
