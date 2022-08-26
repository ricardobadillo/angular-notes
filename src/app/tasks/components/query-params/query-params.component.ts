import { Component } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-query-params',
  templateUrl: './query-params.component.html',
  styleUrls: ['./query-params.component.scss']
})
export class QueryParamsComponent {
  
  inputText: string = '';
  error: boolean = false;
  errorText: string = 'Error - Sin parámetro';

  constructor( private router: Router ) { }

  sendText(text: string) {
    console.log(text);
  }

  onPage() {
    this.router.navigate(['tasks/page'], { queryParams: { name: 'Ricardo', last_name: 'Badillo', params: 'Desde TypeScript' } });
  }

  onPageParams(link: string) {
    if (!this.inputText) {
      this.error = true;
      return;
    }

    this.router.navigate(['tasks/page-params/', link]);
  }
  
  onOtherPage() {
    if (!this.inputText) {
      this.error = true;
      return;
    }

    // this.router.navigate(['tasks/other-page']);
  }
}
