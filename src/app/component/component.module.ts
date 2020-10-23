import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { GoogleMapComponent } from './google-map/google-map.component';
import { AgmCoreModule } from '@agm/core';
import { NzButtonModule } from 'ng-zorro-antd/button';



@NgModule({
  declarations: [GoogleMapComponent],
  imports: [
    CommonModule,
    NzButtonModule,
    AgmCoreModule.forRoot({
      // please get your own API key here:
      // https://developers.google.com/maps/documentation/javascript/get-api-key?hl=en
      // AIzaSyDHscXjBRBV4_TlMXjOxRNmncAxBJ4QwEY
      apiKey: 'AIzaSyDJW4jsPlNKgv6jFm3B5Edp5ywgdqLWdmc'
    })
  ],
  exports: [GoogleMapComponent]
})
export class ComponentModule { }
