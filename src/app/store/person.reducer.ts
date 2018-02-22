import { updateGroup, validate } from 'ngrx-forms';

import { Person } from '../models';
import { required } from './utils';

export const initialPersonState = {
  firstName: '',
  lastName: '',
  age: null,
};

export const personGroupValidation = updateGroup<Person>({
  firstName: validate(required),
  lastName: validate(required),
});
