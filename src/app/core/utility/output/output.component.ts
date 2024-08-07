import { Component, EventEmitter, Output } from '@angular/core';

@Component({
  selector: 'app-output',
  templateUrl: './output.component.html',
})
export class OutputComponent {
  @Output()
  public onOutput = new EventEmitter<string>();

  public eventAddItem(item: string): void {
    this.onOutput.emit(item);
  }
}
