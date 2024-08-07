import { Component } from '@angular/core';

@Component({
  selector: 'app-string-operators',
  templateUrl: './string-operators.component.html',
})
export class StringOperatorsComponent {
  public nombre = '';
  public placeholder = 'Escribe tu nombre...';

  public convertStringToNumber(time: string): number {
    return parseInt(time);
  }
}
