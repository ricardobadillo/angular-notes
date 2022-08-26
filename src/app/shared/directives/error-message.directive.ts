import { Directive, ElementRef, Input, OnInit } from '@angular/core';

@Directive({
  selector: '[error-message]'
})
export class ErrorMessageDirective implements OnInit {

  private _color: string = 'red';
  private _message: string = 'Este campo es requerido';

  htmlElement: ElementRef<HTMLElement>;
  
  @Input() set color(value: string) {
    this._color = value;
    this.setColor();
  }

  @Input() set message(value: string) {
    this._message = value;
    this.setMessage();
  }

  @Input() set valid(value: boolean) {
    if (value) {
      this.htmlElement.nativeElement.classList.add('hidden');
    } else {
      this.htmlElement.nativeElement.classList.remove('hidden');
    }
  }

  constructor( private elementRef: ElementRef<HTMLElement> ) { 
    // console.log(elementRef);
    this.htmlElement = elementRef;
  }

  ngOnInit(): void { 
    this.setColor();
    this.setMessage();
  }
  
  setColor(): void {
    this.htmlElement.nativeElement.style.color = this._color;
  }

  setMessage(): void {
    this.htmlElement.nativeElement.innerText = this._message;
  }
}
