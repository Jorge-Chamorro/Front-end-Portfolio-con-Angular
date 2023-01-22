import { Component, OnInit } from '@angular/core';


@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit {



  constructor() { }

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
        "probando el t-write", 
        "Using the 'strings' method"
      )
      .start()

   
  }

}
