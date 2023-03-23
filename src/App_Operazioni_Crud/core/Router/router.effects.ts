import { Injectable } from '@angular/core';
import { Router } from '@angular/router';
import { Actions, createEffect, ofType } from '@ngrx/effects';
import { Location } from '@angular/common';
import { go } from './router.actions';

@Injectable()
export class RouterEffects {
  constructor(
    private actions$: Actions,
    private router: Router,
    private location: Location
  ) {}

  goEffect$ = createEffect(
    () =>
      this.actions$.pipe(
        ofType(go),
        tap((action) => {
          this.router.navigate(action.path, action.extras);
        })
      ),
    { dispatch: false }
  );
}
