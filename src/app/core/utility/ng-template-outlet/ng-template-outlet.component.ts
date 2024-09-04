import { Component } from '@angular/core';

@Component({
  selector: 'app-ng-template-outlet',
  templateUrl: './ng-template-outlet.component.html',
  styleUrls: ['./ng-template-outlet.component.scss'],
})
export class NgTemplateOutletComponent {
  public default = true;
  public list = ['Item #1', 'Item #2'];
  public menu: Array<{ id: number; label: string; url: string }> = [
    { id: 1, label: 'Angular', url: 'https://angular.io/' },
    { id: 2, label: 'React', url: 'https://reactjs.org/' },
    { id: 3, label: 'Vue', url: 'https://vuejs.org//' },
  ];

  public addNewItem(): void {
    const index = this.list.length + 1;
    this.list.push(`Item #${index}`);
  }
}
