import { Component, OnInit } from '@angular/core';
import { DataServiceService } from '../data-service.service';
import { Interfaz_hyss } from '../interfaces/Interfaz_hyss';

@Component({
  selector: 'app-hardsoftskills',
  templateUrl: './hardsoftskills.component.html',
  styleUrls: ['./hardsoftskills.component.css']
})
export class HardsoftskillsComponent implements OnInit {

  dataSkill: Interfaz_hyss[] = [];

  constructor( private dataService : DataServiceService) { }

  ngOnInit(): void {
    this.dataService.gethyss().subscribe( data => this.dataSkill = data)
  }

}
