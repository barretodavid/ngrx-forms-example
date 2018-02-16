import { FormGroupState } from 'ngrx-forms';

export interface Person {
  firstName: string;
  lastName: string;
  age: number;
}

export interface State {
  count: number;
  person: FormGroupState<Person>;
}
