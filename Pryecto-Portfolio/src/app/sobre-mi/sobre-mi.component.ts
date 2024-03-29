import { Component, OnInit } from '@angular/core';
import { DataServiceService } from '../data-service.service';
import { Interfaz_persona } from '../interfaces/Interfaz_persona';
import { LoginuserserviceService } from '../loginuserservice.service';

@Component({
  selector: 'app-sobre-mi',
  templateUrl: './sobre-mi.component.html',
  styleUrls: ['./sobre-mi.component.css']
})
export class SobreMiComponent implements OnInit {

  dataUser: Interfaz_persona = {
   
    nombre: "",
    apellido: "",
    url_foto: "",
    sobre_mi: "",
    correo: ""
  };

  editando = false;
  idUser: number = 2;
  isLogged:boolean = false;

  constructor( private dataService: DataServiceService, private loginuserservice: LoginuserserviceService) {
    this.loginuserservice.getVariable().subscribe(variable => { this.isLogged = variable });
    // this.isLogged = this.loginuserservice.getVariable();
   }

  // textoSobremi : string = "Me encanta escribir codigo, diseñar y aprender constantemente sobre este mundo maraviloso de la programación. Para mi mas que un trabajo es un pasatiempo que disfruto"
  
  ngOnInit(): void {
    this.dataService.getpersona().subscribe(data => this.dataUser = data);
    console.log(this.dataUser);
    
  }



  openEditForm() {
    this.editando = true;
  }

  cancelEdition() {
    this.editando = false;
  }

  guardarPersona() {
    console.log("item a modificar= " + JSON.stringify(this.dataUser));
    this.dataService.guardarPersona(this.dataUser).subscribe();
    this.editando = false;
  }



}
