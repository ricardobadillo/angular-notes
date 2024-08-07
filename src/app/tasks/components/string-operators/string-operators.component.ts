import { Component } from '@angular/core';

@Component({
  selector: 'app-string-operators',
  templateUrl: './string-operators.component.html',
  styleUrls: ['./string-operators.component.scss'],
})
export class StringOperatorsComponent {
  placeholder: string = 'Escribe tu nombre...';
  nombre: string = '';

  constructor() {}

  convertStringToNumber(time: string) {
    return parseInt(time);
  }
}
