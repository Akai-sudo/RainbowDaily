import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class GeospotService {

  constructor() { }

  /*public getGeolocation(success, fail, noLocation): void {
    if(navigator.geolocation) {
      navigator.geolocation.getCurrentPosition(function(){
        alert('Location accessed')
          },function(){
       alert('User not allowed')
          },{timeout:10000});
    } else {
      noLocation();
    }
  }*/
}
