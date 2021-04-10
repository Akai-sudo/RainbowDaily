import { Component, OnInit } from '@angular/core';
import { GeospotService } from '../storitve/geospot.service';

@Component({
  selector: 'app-main-page',
  templateUrl: './main-page.component.html',
  styleUrls: ['./main-page.component.css']
})
export class MainPageComponent implements OnInit {

  constructor(private geospotService: GeospotService) { }

  
  /*private getGeospotMainComponent(): any {
    this.geospotService.getGeolocation();
  }*/

  ngOnInit(): void {
  }

}
