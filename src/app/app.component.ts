import { Component } from '@angular/core';
import { Trapeze } from './interface';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  public isCollapsed = false;
  public markerArray: Array<Trapeze> = [];
  public marker: Trapeze;
  constructor() {
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
}
