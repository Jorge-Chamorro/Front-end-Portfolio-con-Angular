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


  constructor( private dataService: DataServiceService) { }

  ngOnInit(): void {

    this.dataService.getproyectos().subscribe( data => this.dataUser = data);

  }

}
