import { Component, OnInit } from '@angular/core';
import { DataServiceService } from '../data-service.service';
import { Interfaz_persona } from '../interfaces/Interfaz_persona';

@Component({
  selector: 'app-sobre-mi',
  templateUrl: './sobre-mi.component.html',
  styleUrls: ['./sobre-mi.component.css']
})
export class SobreMiComponent implements OnInit {

  dataUser: Interfaz_persona[] = [];

  constructor( private dataService: DataServiceService) { }

  // textoSobremi : string = "Me encanta escribir codigo, diseñar y aprender constantemente sobre este mundo maraviloso de la programación. Para mi mas que un trabajo es un pasatiempo que disfruto"
  
  ngOnInit(): void {
    this.dataService.getpersona().subscribe(data => this.dataUser = data);
    console.log(this.dataUser);
  }

}
