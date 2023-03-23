import { Component } from '@angular/core';
import { select, Store } from '@ngrx/store';
import { getRouter } from './core/Router/router.selector';
@Component({
  selector: 'app-navbar',
  template: `
   <nav class="navbar navbar-dark bg-primary">
    <div class="container-fluid">
      <button routerLink="home" class="btn btn-primary"> Home </button>
      <button routerLink="login" class="btn btn-primary"> Login </button>
      <span class="navbar-brand"> {{utente$ | async}} </span>
      <button  class="btn btn-primary" (click)="logout()"> Logout </button>
      <button *appIfLogged routerLink="editor" class="btn btn-primary"> Editor </button>
      <button *appIfLogged routerLink="profile" class="btn btn-primary"> Profile </button>
    </div>
   </nav>
  `,
  styles: [],
})
export class NavbarComponent {
  url: string | null;
  constructor(private store: Store<any>) {
    store.pipe(select(getRouter))
      .subscribe((res) => (this.url = res && res.state.url));
  }
  user$ = this.store.pipe(select(getProfileUserName));

  logout() {
    this.store.dispatch(authActions.logout())
  }
}
}
