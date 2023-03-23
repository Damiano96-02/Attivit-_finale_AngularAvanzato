import { Injectable } from "@angular/core";
import { Actions } from "@ngrx/effects";

@Injectable()
export class NumberEffects {
  costructor (
    private actions$: Actions,
    private customNumberService : CustomNumberService) {}
}