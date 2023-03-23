import { createReducer, on } from '@ngrx/store';
import { add, sub, reset, set } from '../../Store/Actions/Counter.actions';

export const initialState: number = 0;

export interface customNumber {
  number: Number;
}

export const CounterState = createReducer(
  initialState,
  on(add, (state, i) => state + i.add),
  on(sub, (state, i) => state - i.sub),
  on(reset, () => 0),
  on(set, (state, action) => action.set)
);
