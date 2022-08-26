import { Component } from '@angular/core';

@Component({
  selector: 'app-events',
  templateUrl: './events.component.html',
  styleUrls: ['./events.component.scss']
})
export class EventsComponent {

  inputValueBlur: string = '';
  inputValueFocus: string = '';
  messageScroll: string = '';
  imgLink: string = 'https://mdn.mozillademos.org/files/6457/mdn_logo_only_color.png';

  constructor() { }

  onClick() {
    console.log('Has clickeado');
  }

  onDoubleClick() {
    console.log('Has clickeado dos veces');
  }

  onBlur() {
    this.inputValueBlur = 'Has hecho blur';
  }

  onFocus() {
    this.inputValueFocus = 'Has hecho focus';
  }

  onScroll() {
    console.log('Has hecho scroll');
    this.messageScroll = 'Has hecho scroll';
  }

  onCut() {
    console.log('Has cortado un texto');
  }

  onCopy() {
    console.log('Has copiado un texto');
  }

  onPaste() {
    console.log('Has pegado un texto');
  }

  onKeyUp(event: KeyboardEvent) {
    console.log(event.key);
  }

  onLoad() {
    console.log('Algo se ha cargado');
  }

  onError(event: Event) {
    console.log('Algo ha fallado');
  }

  onKeyupEnter() {
    this.imgLink = 'assets/images/default.jpg';
  }
}
