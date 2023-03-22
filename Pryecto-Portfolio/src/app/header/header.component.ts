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
  exitV: boolean = false;
  nuevaL: boolean = true;

  constructor( private router: Router, private loginService : LoginuserserviceService) { }

  ngOnInit(): void {
    this.isLoggedG = this.loginService.getVariable();
  }

  irALogin() {
    
    this.router.navigate(['/login']);
    console.log("el router funciona");
    this.loginService.setVariable(this.nuevaL);
    console.log("la variable isloggedG es:" + this.isLoggedG);
  }

  exit() {
    this.loginService.setVariable(this.exitV);
  }
}
