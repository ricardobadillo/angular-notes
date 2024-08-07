import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';

import { Ninja, NinjaDTO } from '../interfaces/ninja';

@Injectable({
  providedIn: 'root',
})
export class NinjasService {
  private counter = new BehaviorSubject<Ninja[]>([]);
  counter$ = this.counter.asObservable();
  ninjas: Ninja[] = [];

  constructor(private http: HttpClient) {}

  getNinjas() {
    return this.http.get<Ninja[]>('http://localhost:3000/ninjas');
  }

  getNinjaSelected(id: string) {
    return this.http.get<Ninja>(`http://localhost:3000/ninjas/${id}`);
  }

  postNinja(ninja: Ninja) {
    return this.http.post<Ninja>('http://localhost:3000/ninjas', ninja);
  }

  updateNinja(id: string, ninjaUpdate: NinjaDTO) {
    return this.http.put<Ninja>(`http://localhost:3000/ninjas/${id}`, ninjaUpdate);
  }

  deleteNinja(id: string) {
    return this.http.delete<boolean>(`http://localhost:3000/ninjas/${id}`);
  }

  getNinjaByPages(limit: number, offset: number) {
    return this.http.get<Ninja[]>(`http://localhost:3000/ninjas`, {
      params: { limit, offset },
    });
  }

  addNinja(ninja: Ninja) {
    this.ninjas.push(ninja);
    this.counter.next(this.ninjas);
  }
}
