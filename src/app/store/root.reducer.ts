import { FormGroupState } from 'ngrx-forms';

import { RootForm, initialFormState, formReducer } from './forms';
import { counterReducer, counterInitialValue } from './counter.reducer';

export interface AppState {
  counter: number;
  myForm: FormGroupState<RootForm>;
}

export const initialState: AppState = {
  counter: counterInitialValue,
  myForm: initialFormState,
};

export const rootReducer = {
  counter: counterReducer,
  myForm: formReducer,
};
