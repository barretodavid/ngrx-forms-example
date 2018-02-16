import { Action } from '@ngrx/store';
import { createFormGroupState, updateGroup, createFormGroupReducerWithUpdate, validate } from 'ngrx-forms';
import { Person } from './types';

const formId = 'person'

export const personInitialValue = createFormGroupState<Person>(formId, {
  firstName: '',
  lastName: '',
  age: null,
});

function required(value: any) {
  return !!value ? {} : { required: true };
}

function min(minValue: number) {
  return (value: number) => {
    return value >= minValue ? {} : { min: [value, minValue] };
  }
}

export const personReducer = createFormGroupReducerWithUpdate<Person>({
  firstName: validate(required),
  lastName: validate(required),
});
