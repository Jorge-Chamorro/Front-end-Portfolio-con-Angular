import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule, Routes } from '@angular/router';
import { HeaderComponent } from './header/header.component';



const routes: Routes = 
  [
    { path: 'route1', component: HeaderComponent },
    { path: 'route3', component: HeaderComponent },
    { path: 'route2', component: HeaderComponent },
    { path: 'route4', component: HeaderComponent }
  ]


@NgModule({
  declarations: [],
  imports: [
    CommonModule, RouterModule.forRoot(routes)
  ],

  exports : [RouterModule]

})

export class AppRoutingModule { }
