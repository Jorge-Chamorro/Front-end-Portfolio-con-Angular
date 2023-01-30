import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { RouterModule } from '@angular/router'

import { AppComponent } from './app.component';
import { HeaderComponent } from './header/header.component';
import { BannerComponent } from './banner/banner.component';
import { MenuDesplegableComponent } from './menu-desplegable/menu-desplegable.component';

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    BannerComponent,
    MenuDesplegableComponent
  ],
  imports: [
    BrowserModule,RouterModule.forRoot([
      { path: 'route1', component: HeaderComponent },
      { path: 'route2', component: HeaderComponent },
      { path: 'route3', component: HeaderComponent },
      { path: 'route4', component: HeaderComponent }
    ])
  ],

  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
