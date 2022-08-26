import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { Ninja, Type } from '../../interfaces/ninja';

@Component({
  selector: 'app-ninja',
  templateUrl: './ninja.component.html',
  styleUrls: ['./ninja.component.scss']
})
export class NinjaComponent implements OnInit {

  @Input() ninja: Ninja = {
    id: '',
    name: '',
    type: Type.Antagonista,
    village: '',
    techniques: '',
    phrase: ''
  }

  @Output() addNinjaEvent = new EventEmitter<Ninja>();
  @Output() editNinjaEvent = new EventEmitter<Ninja>();
  @Output() deleteNinjaEvent = new EventEmitter<Ninja>();
  @Output() ninjaDetailEvent = new EventEmitter<string>();

  constructor() { }

  ngOnInit(): void {
  }
  
  addNinja() {
    this.addNinjaEvent.emit(this.ninja);
  }

  editNinja() {
    this.editNinjaEvent.emit(this.ninja);
  }

  deleteNinja() {
    this.deleteNinjaEvent.emit(this.ninja);
  }

  ninjaDetail() {
    this.ninjaDetailEvent.emit(this.ninja.id);
  }
}
