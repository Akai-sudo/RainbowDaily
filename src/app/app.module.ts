import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { FormsModule } from '@angular/forms';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { OgrodjeComponent } from './ogrodje/ogrodje.component';
import { MainPageComponent } from './main-page/main-page.component';

import { AgmCoreModule } from '@agm/core'; 

@NgModule({
  
  declarations: [
    AppComponent,
    OgrodjeComponent,
    MainPageComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    NgbModule,
    AgmCoreModule.forRoot({  
      apiKey: 'AIzaSyCPu-HmyWMAm-o_KA3gGuAoW6-w6dRZYwM',
      libraries: ['places']  
    })
  ],
  providers: [],
  bootstrap: [OgrodjeComponent]
})
 

export class AppModule {
 }
