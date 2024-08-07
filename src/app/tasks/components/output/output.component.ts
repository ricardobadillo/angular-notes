import { Component, EventEmitter, OnInit, Output } from '@angular/core';

@Component({
  selector: 'app-output',
  templateUrl: './output.component.html',
  styleUrls: ['./output.component.scss'],
})
export class OutputComponent implements OnInit {
  @Output() onOutput = new EventEmitter<string>();

  constructor() {}

  ngOnInit(): void {}

  eventAddItem(item: string) {
    this.onOutput.emit(item);
  }
}
