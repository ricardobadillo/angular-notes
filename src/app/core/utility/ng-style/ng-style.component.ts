import { Component } from '@angular/core';

@Component({
  selector: 'app-ng-style',
  templateUrl: './ng-style.component.html',
  styleUrls: ['./ng-style.component.scss'],
})
export class NgStyleComponent {
  public property = false;
  public propertyClass = false;

  public changeStyle(): void {
    this.property = !this.property;
  }

  public changeClass(): void {
    this.propertyClass = !this.propertyClass;
  }
}
