import { Component } from '@angular/core';

@Component({
  selector: 'app-ng-style',
  templateUrl: './ng-style.component.html',
  styleUrls: ['./ng-style.component.scss'],
})
export class NgStyleComponent {
  property: boolean = false;
  propertyClass: boolean = false;

  constructor() {}

  changeStyle() {
    this.property = !this.property;
  }

  changeClass() {
    this.propertyClass = !this.propertyClass;
  }
}
