import { Component, ContentChild, EventEmitter, Input, Output, TemplateRef } from '@angular/core';

@Component({
  selector: 'app-list',
  templateUrl: './list.component.html',
  styleUrls: ['./list.component.scss'],
})
export class ListComponent {
  @ContentChild(TemplateRef) templateRef!: TemplateRef<any>;
  @Input() list: Array<string> = [];
  @Output() itemAdd = new EventEmitter<void>();

  public addMore(): void {
    this.itemAdd.emit();
  }

  public removeItem(index: number): void {
    this.list.splice(index, 1);
  }
}
