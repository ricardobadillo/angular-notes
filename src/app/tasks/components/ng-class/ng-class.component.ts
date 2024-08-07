import { Component } from '@angular/core';

@Component({
  selector: 'app-ng-class',
  templateUrl: './ng-class.component.html',
  styleUrls: ['./ng-class.component.scss'],
})
export class NgClassComponent {
  numberProperty: number = 0;

  constructor() {}

  changeNgClass() {
    this.numberProperty++;
  }

  getClass(num: number) {
    if (num == 1) {
      return 'green';
    } else if (num == 3) {
      return 'blue';
    } else if (num == 5) {
      return 'red';
    } else {
      return 'yellow';
    }
  }
}
