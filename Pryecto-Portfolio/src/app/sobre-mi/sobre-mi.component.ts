import { Component, OnInit } from '@angular/core';
import { DataServiceService } from '../data-service.service';
import { InterfazPersona } from '../InterfazPersona';

@Component({
  selector: 'app-sobre-mi',
  templateUrl: './sobre-mi.component.html',
  styleUrls: ['./sobre-mi.component.css']
})
export class SobreMiComponent implements OnInit {

  dataUser: InterfazPersona[] = [];

  constructor( private dataService: DataServiceService) { }

  // textoSobremi : string = "Me encanta escribir codigo, diseñar y aprender constantemente sobre este mundo maraviloso de la programación. Para mi mas que un trabajo es un pasatiempo que disfruto"
  
  ngOnInit(): void {
    this.dataService.getdata().subscribe(data => this.dataUser = data);
    console.log(this.dataUser);
  }

}
