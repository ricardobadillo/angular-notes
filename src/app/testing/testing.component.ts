// Angular.
import { Component, OnInit } from '@angular/core';

// Componentes.
import { Calculator } from './components/calculator';



@Component({
  selector: 'app-testing',
  templateUrl: './testing.component.html',
  styleUrls: ['./testing.component.scss']
})
export class TestingComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
    const calculator = new Calculator();
    const resultado = calculator.multiplicar(5, 5);
    console.log(resultado);
  };
}
