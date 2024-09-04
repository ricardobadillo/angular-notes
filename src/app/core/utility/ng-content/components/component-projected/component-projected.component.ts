import { AfterContentInit, Component, ContentChild, ContentChildren, ElementRef, QueryList } from '@angular/core';

@Component({
  selector: 'app-component-projected',
  templateUrl: './component-projected.component.html',
  styleUrls: ['./component-projected.component.scss'],
})
export class ComponentProjectedComponent implements AfterContentInit {
  @ContentChild('appRef')
  public appRef: ElementRef | null = null;

  @ContentChildren('titleRef')
  public titleRef: QueryList<ElementRef> | null = null;

  ngAfterContentInit(): void {
    // console.log(this.appRef);
    this.titleRef?.forEach((element) => {
      (element.nativeElement as HTMLHeadingElement).style.color = 'red';
    });
    // (this.titleRef?.nativeElement as HTMLDivElement).style.color = 'red';
    // console.log(this.appRef);
    (this.appRef?.nativeElement as HTMLDivElement).style.background = 'lightblue';
  }
}
