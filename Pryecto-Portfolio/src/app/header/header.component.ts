import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { LoginuserserviceService } from '../loginuserservice.service';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})



export class HeaderComponent implements OnInit {

  isLoggedG: boolean = false;
  
  
  

  constructor( private router: Router, private loginService : LoginuserserviceService) { }

  ngOnInit(): void {

    // this.loginService.getVariable().subscribe(variable => { this.isLoggedG = variable });
    this.loginService.isLoggedG$.subscribe(variable => { this.isLoggedG = variable });
    

  }

  irALogin() {
    console.log("La variable isLoggedG en el componente header es:" + this.isLoggedG);
    
    this.router.navigate(['/login']);
    
    // console.log("el router funciona");
    // this.loginService.setVariable(true);
    // this.isLoggedG = this.loginService.getVariable()
    // console.log("la variable isloggedG es:" + this.isLoggedG);
  }

  exit() {
    this.loginService.setVariable(false);
    this.router.navigate([""]);
    
    // this.isLoggedG = this.loginService.getVariable();
  }
}
