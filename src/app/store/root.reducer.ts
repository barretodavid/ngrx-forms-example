import { ActionReducerMap } from '@ngrx/store';
import { formGroupReducer, createFormGroupState } from 'ngrx-forms';

import { State, Form } from './types';
import { counterReducer, counterInitialValue } from './counter.reducer';
import { formInitialValue, formReducer } from './form.reducer';

export const initialState: State = {
  count: counterInitialValue,
  form: formInitialValue,
}

export const rootReducer: ActionReducerMap<State> = {
  count: counterReducer,
  form: formReducer,
};
