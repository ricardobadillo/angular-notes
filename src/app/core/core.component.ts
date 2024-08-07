import { Component } from '@angular/core';

@Component({
  selector: 'app-core',
  templateUrl: './core.component.html',
  styleUrls: ['./core.component.scss'],
})
export class CoreComponent {
  public list: Array<string> = ['Uno', 'Dos', 'Tres'];

  public addItemList(item: string): void {
    this.list.push(item);
  }
}
