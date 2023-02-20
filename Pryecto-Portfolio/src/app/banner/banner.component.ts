import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-banner',
  templateUrl: './banner.component.html',
  styleUrls: ['./banner.component.css']
})
export class BannerComponent implements OnInit {

  constructor() { }

  titulo : string = "{ Hola }"

  ngOnInit(): void {

    const Typewriter = require('t-writer.js')

    const target = document.querySelector('.tw');
    
    const writer = new Typewriter(target, {
      loop: true, 
      typeColor: 'white',
      cursorColor: 'white',
      blinkSpeed: 150 
    })
    
    writer
      .strings(
        300,
        "Soy Jorge Chamorro, un desarrollador web full stack",
        "Muchas gracias por visitarme", 
        "Te invito a navegar por la pagina y conocer lo que hago"
      )
      .start()
  }

}
