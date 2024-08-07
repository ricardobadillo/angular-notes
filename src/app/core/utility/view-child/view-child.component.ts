import { Component, ElementRef, ViewChild } from '@angular/core';

@Component({
  selector: 'app-view-child',
  templateUrl: './view-child.component.html',
})
export class ViewChildComponent {
  @ViewChild('input')
  public input?: ElementRef;

  public enter(): void {
    console.log(this.input?.nativeElement);
  }
}
