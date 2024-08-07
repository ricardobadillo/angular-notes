import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Params } from '@angular/router';

@Component({
  selector: 'app-page-params',
  templateUrl: './page-params.component.html',
})
export class PageParamsComponent implements OnInit {
  param!: string;

  constructor(private router: ActivatedRoute) {}

  ngOnInit(): void {
    this.router.params.subscribe((path: Params) => {
      this.param = path['id'];
    });

    console.log(this.router.snapshot.params);
  }
}
