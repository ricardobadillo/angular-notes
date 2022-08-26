import { Component } from '@angular/core';
import { UntypedFormBuilder, UntypedFormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-add',
  templateUrl: './add.component.html',
  styleUrls: ['./add.component.scss']
})
export class AddComponent {
  
  nombre: string = 'Ricardo Badillo';
  color: string = 'pink';
  message: string = 'Debe ingresar este campo';

  miFormulario: UntypedFormGroup = this.fb.group({
    nombre: ['', Validators.required]
  });

  constructor( private fb: UntypedFormBuilder ) { }

  ngOnInit(): void {
  }
  
  existError(campo: string): boolean {
    return this.miFormulario.get(campo)?.invalid || false;
  }

  changeText() {
    this.message = Math.random().toString();
  }

  changeColor() {
    const color = "#xxxxxx".replace(/x/g, y=>(Math.random()*16|0).toString(16));
    this.color = color;
  }
}
