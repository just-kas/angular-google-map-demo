import { AfterViewInit, Component, EventEmitter, Input, OnChanges, OnInit, Output, SimpleChanges, ViewChild } from '@angular/core';
import { Trapeze } from '../../interface';
import { AgmMapTypeControl } from '@agm/core';

@Component({
  selector: 'app-google-map',
  templateUrl: './google-map.component.html',
  styleUrls: ['./google-map.component.scss']
})
export class GoogleMapComponent implements OnInit, OnChanges {
  @Input() marker: Trapeze;
  @Input() markerArray: Array<Trapeze> = [];
  @Output() mapRightEvent: EventEmitter<boolean> = new EventEmitter<boolean>();
  @Input() mapGeo: any;
  geoJsonObject: object = {
    type: 'FeatureCollection',
    features: [
      {
        type: 'Feature',
        properties: {},
        geometry: {
          type: 'Polygon',
          coordinates: [
            [
              [123.61, -22.14], [122.38, -21.73], [121.06, -21.69], [119.66, -22.22], [119.00, -23.40],
              [118.65, -24.76], [118.43, -26.07], [118.78, -27.56], [119.22, -28.57], [120.23, -29.49],
              [121.77, -29.87], [123.57, -29.64], [124.45, -29.03], [124.71, -27.95], [124.80, -26.70],
              [124.80, -25.60], [123.61, -25.64], [122.56, -25.64], [121.72, -25.72], [121.81, -26.62],
              [121.86, -26.98], [122.60, -26.90], [123.57, -27.05], [123.57, -27.68], [123.35, -28.18],
              [122.51, -28.38], [121.77, -28.26], [121.02, -27.91], [120.49, -27.21], [120.14, -26.50],
              [120.10, -25.64], [120.27, -24.52], [120.67, -23.68], [121.72, -23.32], [122.43, -23.48],
              [123.04, -24.04], [124.54, -24.28], [124.58, -23.20], [123.61, -22.14]
            ]
          ]
        }
      }
    ]
  };
  public polyArray: Array<any> = [];
  public markerVisible = true;
  public fillColor;
  constructor() { }

  public ngOnInit() {
    this.marker = {lat: 30.569587, lng: 104.060391};
  }

  public ngOnChanges(changes: SimpleChanges): void {
    console.log(this.mapGeo);
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
