import { Component } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-query-params',
  templateUrl: './query-params.component.html',
})
export class QueryParamsComponent {
  public error = false;
  public errorText = 'Error - Sin parámetro al usar el botón de "Other page component" / "Page params".';
  public inputText = '';

  constructor(private router: Router) {}

  public sendText(text: string): void {
    alert(text);
  }

  public onOtherPage(): void {
    if (!this.inputText) {
      this.error = true;
      return;
    }

    this.router.navigate(['tasks/other-page']);
  }

  public onPageParams(path: string): void {
    if (!this.inputText) {
      this.error = true;
      return;
    }

    this.router.navigate(['tasks/page-params/', path]);
  }

  public onPage(): void {
    this.router.navigate(['tasks/any-page'], {
      queryParams: { name: 'Ricardo', last_name: 'Badillo', params: 'Desde TypeScript' },
    });
  }
}
