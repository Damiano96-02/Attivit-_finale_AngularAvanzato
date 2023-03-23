import { createReducer, on } from '@ngrx/store';
import { cleanProfilo } from '../../Store_App/Actions/Demo.actions';

export const DemoProfileReducer = createReducer(
  'Mario Rossi',
  on(cleanProfilo, () => '')
);
