import { Component } from '@angular/core';
import { User } from '../user';
import { LoginuserserviceService } from '../loginuserservice.service';
import { Router } from '@angular/router';


@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent {

  
  user:User = new User();
  isLogged:boolean = false;

  constructor(private loginuserservice: LoginuserserviceService, private router: Router) { }




  userLogin(){
    console.log(this.user);
    this.loginuserservice.loginUser(this.user).subscribe(data => {
      this.isLogged = true;
      this.loginuserservice.setVariable(this.isLogged);
      console.log(this.isLogged);
      this.router.navigate(['']);
    }, error => {alert("Por favor ingrese un usuario y contraseñas correctos");
  });
  }

}
