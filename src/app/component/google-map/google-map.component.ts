import { AfterViewInit, Component, EventEmitter, Input, OnInit, Output, ViewChild } from '@angular/core';
import { Trapeze } from '../../interface';
import { AgmMapTypeControl } from '@agm/core';

@Component({
  selector: 'app-google-map',
  templateUrl: './google-map.component.html',
  styleUrls: ['./google-map.component.scss']
})
export class GoogleMapComponent implements OnInit {
  @Input() marker: Trapeze;
  @Input() markerArray: Array<Trapeze> = [];
  @Output() mapRightEvent: EventEmitter<boolean> = new EventEmitter<boolean>();
  public polyArray: Array<any> = [];
  public markerVisible = true;
  public fillColor;
  constructor() { }

  public ngOnInit() {
    this.marker = {lat: 30.569587, lng: 104.060391};
  }

  public mapRightClick() {
    if (!this.markerArray.length) { return; }
    this.polyArray = this.markerArray;
    this.mapRightEvent.emit(true);
    this.markerVisible = false;
  }

  public fillColorHandle() {
    if (this.markerArray) {
      this.fillColor = 'red';
    }
  }
}
