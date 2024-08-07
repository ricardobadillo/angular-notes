import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-page-params',
  templateUrl: './page-params.component.html',
  styleUrls: ['./page-params.component.scss'],
})
export class PageParamsComponent implements OnInit {
  param!: string;

  constructor(private router: ActivatedRoute) {}

  ngOnInit(): void {
    this.router.params.subscribe((link) => {
      this.param = link['id'];
    });

    console.log(this.router.snapshot.params);
  }
}
