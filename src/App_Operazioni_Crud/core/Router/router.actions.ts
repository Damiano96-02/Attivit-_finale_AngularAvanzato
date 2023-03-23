import { NavigationExtras } from '@angular/router';
import { createAction, props } from '@ngrx/store';

export const go = createAction(
  '[router] go ',
  props<{ path: any; extras?: NavigationExtras }>()
);
