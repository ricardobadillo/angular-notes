// Angular.
import { Injectable } from '@angular/core';

// Servicios.
import { ExampleService } from './example.service';



@Injectable( { providedIn: 'root' } )
export class MasterService {

  
  constructor(private exampleService: ExampleService) { }

  getValue(): string {
    return this.exampleService.getValue();
  };
}
