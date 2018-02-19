import { updateGroup, validate } from 'ngrx-forms';
import { required } from './utils';

export interface Person {
  firstName: string;
  lastName: string;
  age: number;
}

export const initialPersonState = {
  firstName: '',
  lastName: '',
  age: null,
};

export const personGroupValidation = updateGroup<Person>({
  firstName: validate(required),
  lastName: validate(required),
});
