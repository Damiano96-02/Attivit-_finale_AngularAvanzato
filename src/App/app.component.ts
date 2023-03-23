import { Component } from '@angular/core';
import { select, Store } from '@ngrx/store';
import { cleanProfilo } from '../App/Store_App/Actions/Demo.actions';

@Component({
  selector: 'my-app',
  template: `
  <p>Utente registrato nello Store inizialmente <b>{{user}} </b></p>
  <button (click)="callAction()" > Clean Action</button>
  `,
  styleUrls: ['./app.component.css'],
})
export class AppComponent {
  user: string;
  constructor(private store: Store<any>) {
    this.store.pipe(select('profilo')).subscribe((res) => (this.user = res));
  }

  callAction() {
    this.store.dispatch(cleanProfilo());
  }
}
