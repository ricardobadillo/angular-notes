import { Component } from '@angular/core';

@Component({
  selector: 'app-tasks',
  templateUrl: './tasks.component.html',
  styleUrls: ['./tasks.component.scss'],
})
export class TasksComponent {
  public list: Array<string> = ['Uno', 'Dos', 'Tres'];

  public addItemList(item: string): void {
    this.list.push(item);
  }
}
