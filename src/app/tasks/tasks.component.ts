import { Component } from '@angular/core';

@Component({
  selector: 'app-tasks',
  templateUrl: './tasks.component.html',
  styleUrls: ['./tasks.component.scss'],
})
export class TasksComponent {
  list: string[] = ['Uno', 'Dos', 'Tres'];

  constructor() {}

  addItemList(item: string) {
    this.list.push(item);
  }
}
