import { Component, ContentChild, TemplateRef } from '@angular/core';

@Component({
  selector: 'app-menu',
  templateUrl: './menu.component.html',
  styleUrls: ['./menu.component.scss'],
})
export class MenuComponent {
  @ContentChild(TemplateRef) templateRef!: TemplateRef<any>;

  public open = true;
}
