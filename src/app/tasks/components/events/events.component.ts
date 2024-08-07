import { Component } from '@angular/core';

@Component({
  selector: 'app-events',
  templateUrl: './events.component.html',
  styleUrls: ['./events.component.scss'],
})
export class EventsComponent {
  public image = 'https://images.pexels.com/photos/2014422/pexels-photo-2014422.jpeg';
  public inputValueBlur = '';
  public inputValueFocus = '';
  public messageScroll = '';

  public onClick(): void {
    console.log('Has clickeado');
  }

  public onDoubleClick(): void {
    console.log('Has clickeado dos veces');
  }

  public onBlur(): void {
    this.inputValueBlur = 'Has hecho blur';
  }

  public onFocus(): void {
    this.inputValueFocus = 'Has hecho focus';
  }

  public onScroll(): void {
    console.log('Has hecho scroll');
    this.messageScroll = 'Has hecho scroll';
  }

  public onCut(): void {
    console.log('Has cortado un texto');
  }

  public onCopy(): void {
    console.log('Has copiado un texto');
  }

  public onPaste(): void {
    console.log('Has pegado un texto');
  }

  public onKeyUp(event: KeyboardEvent) {
    console.log(event.key);
  }

  public onLoad(): void {
    console.log('Algo se ha cargado');
  }

  public onError(event: Event) {
    console.log('Algo ha fallado');
  }

  public onKeyupEnter(): void {
    this.image = 'assets/images/default.jpg';
  }
}
