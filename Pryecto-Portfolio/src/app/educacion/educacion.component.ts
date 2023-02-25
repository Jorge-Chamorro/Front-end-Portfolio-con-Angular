import { Component, OnInit } from '@angular/core';
import { DataServiceService } from '../data-service.service';
import { Interfaz_educacion } from '../interfaces/Interfaz_educacion';

@Component({
  selector: 'app-educacion',
  templateUrl: './educacion.component.html',
  styleUrls: ['./educacion.component.css']
})
export class EducacionComponent implements OnInit {

  dataEducacion:Interfaz_educacion[] = [];



  constructor( private dataService: DataServiceService) {   }

  ngOnInit(): void {

    this.dataService.geteducacion().subscribe(data => this.dataEducacion = data);
    console.log(this.dataEducacion);
  }

}
