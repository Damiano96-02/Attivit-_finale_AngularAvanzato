import { Component } from '@angular/core';
import { select, Store } from '@ngrx/store';
import { Observable } from 'rxjs';
import { add, sub, reset, set } from './Store/Actions/Counter.actions';

@Component({
  selector: 'my-app2',
  template: `<app-navbar></app-navbar>
  <h1 style="text-align:center; font-size: 100px">{{state | async }}</h1>
  <div style="text-align: center">
    <button style="background-color: green; width: 80px; height: 80px; margin: 30px;" (click)="add(1)">+1</button>
    <button style="background-color: blue; width: 80px; height: 80px; margin: 30px;" (click)="sub(1)">-1</button>
    <button style="background-color: red; width: 80px; height: 80px; margin: 30px;" (click)="reset()">Reset</button>
    <p>Inserisci un valore personalizzato</p>
    <input type="number" name="number" placeholder="Inserisci un numero" [(ngModel)]="numero"/>
    <button (click)="set(numero)">Aggiungi</button>
    </div>
  `,
  styleUrls: ['./app.component.css'],
})
export class AppComponent {
  numero = 0;
  constructor(private store: Store<any>) {}
  state: Observable<number> = this.store.pipe(select('number'));

  add(number: number) {
    this.store.dispatch(add({ add: number }));
  }
  sub(number: number) {
    this.store.dispatch(sub({ sub: number }));
  }
  reset() {
    this.store.dispatch(reset());
  }
  set(formData: Partial<number>) {
    this.store.dispatch(set({ set: formData }));
  }
}
