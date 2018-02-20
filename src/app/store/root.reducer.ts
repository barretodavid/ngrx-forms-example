import { FormGroupState } from 'ngrx-forms';

import { RootForm, initialFormState, formReducer } from './forms';
import { counterReducer, counterInitialValue } from './counter.reducer';

export interface AppState {
  counter: number;
  form: FormGroupState<RootForm>;
}

export const initialState: AppState = {
  counter: counterInitialValue,
  form: initialFormState,
};

export const rootReducer = {
  counter: counterReducer,
  form: formReducer,
};
