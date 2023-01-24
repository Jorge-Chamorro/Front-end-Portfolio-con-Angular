import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';


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
    BrowserModule,
  ],

  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
