import { Component, OnInit } from '@angular/core';
import { NinjasService } from '../../services/ninjas.service';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.scss']
})
export class NavbarComponent implements OnInit {

  counter: number = 0;
  
  constructor( private ninjasService: NinjasService ) { }

  ngOnInit(): void {
    this.ninjasService.counter$.subscribe(ninjas => {
      this.counter = ninjas.length;
    })
  }

}
