import { Component, OnInit } from '@angular/core';
import { Trapeze } from './interface';
import {open} from 'shapefile';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit{
  public isCollapsed = false;
  public markerArray: Array<Trapeze> = [];
  public marker: Trapeze;
  public geoArray = {
    type: 'FeatureCollection',
    features: []
  };
  public getGeoJson = {
    type: 'FeatureCollection',
    features: []
  };
  constructor() {
  }

  public ngOnInit(): void {
  }

  public getRandomNum(min, max) {
    const range = max - min;
    const rand = Math.random();
    return(min + Math.round(rand * range));
  }

  public random() {
    const data = [];
    for (let i = 0; i < 500; i++) {
        const aaa = this.getRandomNum(1, 35) + Math.random();
        const bbb = this.getRandomNum(1, 100) + Math.random();
        data.push({lat: aaa, lng: bbb});
    }
    this.markerArray = data;
  }

  public trapezeChange(event: Trapeze) {
    this.marker = event;
  }

  public mapRightEvent() {
    this.markerArray = [];
  }

  public updateFilename(event) {
    const that = this;
    console.log(event);
    const file = event.target.files[0];
    const render = new FileReader();
    render.onload = (e) => {
      console.log(e);
      open(e.target.result)
        .then(source => source.read()
          .then(function log(result) {
            if (result.done) { return; }
            const array = result.value.geometry;
            that.geoArray.features.push(result.value);
            setTimeout(() => {
              that.getGeoJson = that.geoArray;
            }, 1000);
            return source.read().then(log);
          }));
    };
    render.readAsArrayBuffer(file);
  }

  public handleData(data: Array<any>) {
    for (let a = 0; a < data.length; a++) {

    }
  }
}
