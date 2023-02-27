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

  constructor( private dataService: DataServiceService) { }

  ngOnInit(): void {
    this.dataService.getexperiencia().subscribe( data => this.dataExperiencia = data)
  }

}
