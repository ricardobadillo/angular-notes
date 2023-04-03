import { Component, OnInit } from '@angular/core';

import { Ninja, Type, NinjaDTO } from './interfaces/ninja';
import { NinjasService } from './services/ninjas.service';

@Component({
  selector: 'app-rxjs',
  templateUrl: './rxjs.component.html',
  styleUrls: ['./rxjs.component.scss']
})
export class RxjsComponent implements OnInit {
  
  ninjas!: Ninja[];
  ninjaSelected!: Ninja;
  showNinjaDetail: boolean = false;
  limit: number = 5;
  offset: number = 0;

  arrayFake: string[] = ['assets/images/antagonista_deidara.jpg', 'assets/images/antagonista_hidan.jpg', 'assets/images/antagonista_itachi.jpg', 'assets/images/antagonista_kabuto.jpg', 'assets/images/antagonista_kakuzu.jpg'];

  constructor( private ninjasService: NinjasService ) { }

  ngOnInit(): void {
    this.ninjasService.getNinjaByPages(5, 0).subscribe(data => {
      this.ninjas = data;
      this.offset += this.limit;
    });
  }

  addNinja(ninja: Ninja) {
    this.ninjasService.addNinja(ninja);
  }

  showDetailNinja(ninjaID: string) {
    this.ninjasService.getNinjaSelected(ninjaID).subscribe(ninja => {
      this.ninjaSelected = ninja;
      this.showNinjaDetail = !this.showNinjaDetail;
    });
  }
  
  toggleNinjaDetail() {
    this.showNinjaDetail = !this.showNinjaDetail;
  }

  createNinja() {
    const newNinja: Ninja = {
      id: "antagonista_ninja",
      name: 'Ninja',
      type: Type.Antagonista,
      village: 'Konohagakure: Aldea Oculta entre las Hojas',
      techniques: 'Una técnica',
      phrase: 'Una frase'
    };

    this.ninjasService.postNinja(newNinja).subscribe(ninja => {
      this.ninjas.unshift(ninja);
    });
  }

  editNinja(ninja: Ninja) {
    const ninjaEdit: NinjaDTO = {
      id: ninja.id,
      name: ninja.name,
      village: 'Alguna aldea',
      type: ninja.type,
      techniques: 'Una vergataria',
      phrase: ninja.phrase
    };

    this.ninjasService.updateNinja(ninja.id, ninjaEdit).subscribe(ninja => {
      const ninjaIndex = this.ninjas.findIndex(item => item.id == ninja.id);
      this.ninjas[ninjaIndex] = ninja;
    });
  }

  deleteNinja(ninja: Ninja) {
    this.ninjasService.deleteNinja(ninja.id).subscribe(() => {
      const ninjaIndex = this.ninjas.findIndex(item => item.id == ninja.id);
      this.ninjas.splice(ninjaIndex, 1);
    });
  }

  loadMore() {
    this.ninjasService.getNinjaByPages(this.limit, this.offset).subscribe(data => {
      this.ninjas = this.ninjas.concat(data);
      this.offset += this.limit;
    });
  }

  onSwiper(swiper: any) {
    console.log(swiper);
  }

  onSlideChange() {
    console.log('slide change');
  }
}
