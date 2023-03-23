import { createAction, props } from '@ngrx/store';

export const add = createAction(
  '[number] add number',
  props<{ add: number }>()
);

export const sub = createAction(
  '[number] sub number',
  props<{ sub: number }>()
);

export const reset = createAction('[number] clean number');

export const set = createAction(
  '[number] set number',
  props<{ set: number }>()
);
