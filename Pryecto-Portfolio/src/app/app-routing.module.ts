import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule, Routes } from '@angular/router';
import { HeaderComponent } from './header/header.component';
import { BannerComponent } from './banner/banner.component';
import { SobreMiComponent } from './sobre-mi/sobre-mi.component';
import { EducacionComponent } from './educacion/educacion.component';
import { ExperienciaComponent } from './experiencia/experiencia.component';
import { HardsoftskillsComponent } from './hardsoftskills/hardsoftskills.component';
import { ProyectosComponent } from './proyectos/proyectos.component';
import { LoginComponent } from './login/login.component';


const routes: Routes = 
  [
    { path: '', component: BannerComponent },
    { path: 'route2', component: SobreMiComponent },
    { path: 'route3', component: EducacionComponent },
    { path: 'route4', component: ExperienciaComponent }, 
    { path: 'route5', component: HardsoftskillsComponent },
    { path: 'route6', component: ProyectosComponent },
    { path: 'login',  component: LoginComponent}
  ]


@NgModule({
  declarations: [],
  imports: [
    CommonModule, RouterModule.forRoot(routes)
  ],

  exports : [RouterModule]

})

export class AppRoutingModule { }
