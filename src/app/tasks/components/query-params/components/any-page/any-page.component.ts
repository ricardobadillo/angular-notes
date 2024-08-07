import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Params } from '@angular/router';

@Component({
  selector: 'app-any-page',
  templateUrl: './any-page.component.html',
})
export class AnyPageComponent implements OnInit {
  public data: any;

  constructor(private router: ActivatedRoute) {}

  ngOnInit(): void {
    this.router.queryParams.subscribe((params: Params) => (this.data = params));
  }
}
