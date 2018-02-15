import { FormGroupState } from 'ngrx-forms';

export interface Form {
  firstName: string;
  lastName: string;
}

export interface State {
  count: number;
  form: FormGroupState<Form>;
}
