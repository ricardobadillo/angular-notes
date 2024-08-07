import { Component } from '@angular/core';

@Component({
  selector: 'app-ng-switch',
  templateUrl: './ng-switch.component.html',
  styleUrls: ['./ng-switch.component.scss'],
})
export class NgSwitchComponent {
  numberSwitch: number = 0;

  constructor() {}

  sum() {
    this.numberSwitch++;
  }
}
