import { NgModule } from '@angular/core';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { BrowserModule } from '@angular/platform-browser';
import { RouterModule } from '@angular/router';
import { FormsModule } from '@angular/forms';




import { AppComponent } from './app.component';
import { HeaderComponent } from './header/header.component';
import { BannerComponent } from './banner/banner.component';

import { AppRoutingModule } from './app-routing.module';
import { SobreMiComponent } from './sobre-mi/sobre-mi.component';
import { EducacionComponent } from './educacion/educacion.component';
import { ExperienciaComponent } from './experiencia/experiencia.component';
import { HardsoftskillsComponent } from './hardsoftskills/hardsoftskills.component';
import { ProyectosComponent } from './proyectos/proyectos.component';
import { HttpClientModule } from '@angular/common/http';
import { NgCircleProgressModule } from 'ng-circle-progress';
import { LoginComponent } from './login/login.component';


@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    BannerComponent,
    SobreMiComponent,
    EducacionComponent,
    ExperienciaComponent,
    HardsoftskillsComponent,
    ProyectosComponent,
    LoginComponent,
  ],
  imports: [
    BrowserModule, 
    AppRoutingModule,
    HttpClientModule,
    NgCircleProgressModule.forRoot({}),
    FormsModule,
    NgbModule
  ],

  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
