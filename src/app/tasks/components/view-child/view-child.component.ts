import { Component, OnInit, ViewChild, ElementRef } from '@angular/core';

@Component({
  selector: 'app-view-child',
  templateUrl: './view-child.component.html',
  styleUrls: ['./view-child.component.scss']
})
export class ViewChildComponent implements OnInit {

  @ViewChild('input') input!: ElementRef; 

  constructor() { }

  ngOnInit(): void { }

  enter() {
    console.log(this.input);
  }

}
