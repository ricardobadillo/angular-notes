import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-getters-and-setters',
  templateUrl: './getters-and-setters.component.html',
  styleUrls: ['./getters-and-setters.component.scss'],
})
export class GettersAndSettersComponent {
  private _name!: string;
  private _age!: number;
  message!: string;

  public get name(): string {
    return this._name;
  }

  @Input() public set name(name: string) {
    this._name = name;

    if (name == 'Ricardo') {
      this.message = 'Bienvenido';
    } else {
      this.message = 'Sal de aquí';
    }
  }

  public get age(): number {
    return this._age;
  }

  @Input() public set age(age: number) {
    this._age = age;
  }

  constructor() {}

  onRicardo() {
    this.name = 'Ricardo';
  }

  onJavier() {
    this.name = 'Javier';
  }
}
