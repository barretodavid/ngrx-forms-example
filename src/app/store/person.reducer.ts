import { updateGroup, validate } from 'ngrx-forms';
import { required } from 'ngrx-forms/validation';

import { Person } from '../models';

export const initialPersonState = {
  firstName: '',
  lastName: '',
  age: null,
};

export const personGroupValidation = updateGroup<Person>({
  firstName: validate(required),
  lastName: validate(required),
});
