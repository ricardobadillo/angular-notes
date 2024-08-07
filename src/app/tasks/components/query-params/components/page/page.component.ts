import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-page',
  templateUrl: './page.component.html',
  styleUrls: ['./page.component.scss'],
})
export class PageComponent implements OnInit {
  data: any;

  constructor(private router: ActivatedRoute) {}

  ngOnInit(): void {
    this.router.queryParams.subscribe((params) => (this.data = params));
  }
}
