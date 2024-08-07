import { Component } from '@angular/core';

@Component({
  selector: 'app-ng-class',
  templateUrl: './ng-class.component.html',
  styleUrls: ['./ng-class.component.scss'],
})
export class NgClassComponent {
  public numberProperty: number = 0;

  public increment(): void {
    this.numberProperty++;
  }

  getClass(counter: number): 'green' | 'blue' | 'red' | 'yellow' {
    return counter == 1 ? 'green' : counter == 3 ? 'blue' : counter == 5 ? 'red' : 'yellow';
  }
}
