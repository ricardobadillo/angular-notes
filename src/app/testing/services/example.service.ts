// Angular.
import { Injectable } from '@angular/core';

// RXJS.
import { Observable, of } from 'rxjs';



@Injectable( { providedIn: 'root' } )
export class ExampleService {

  private value: string = 'Mi valor';

  constructor() { }

  getValue(): string {
    return this.value;
  };

  setValue(value: string): void {
    this.value = value;
  };

  getPromiseValue(): Promise<string> {
    return Promise.resolve('Valor en promesa');
  };

  getObservableValue(): Observable<string> {
    return of('Valor de un observable');
  }
}
