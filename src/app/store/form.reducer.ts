import { Action } from '@ngrx/store';
import { createFormGroupState, updateGroup, createFormGroupReducerWithUpdate, validate } from 'ngrx-forms';
import { Form } from './types';

const formId = 'my-form'

export const formInitialValue = createFormGroupState<Form>(formId, {
  firstName: '',
  lastName: '',
});

function required(value: any) {
  return !!value ? {} : { required: true };
}

function min(minValue: number) {
  return (value: number) => {
    return value >= minValue ? {} : { min: [value, minValue] };
  }
}

export const formReducer = createFormGroupReducerWithUpdate<Form>({
  firstName: validate(required),
  lastName: validate(required),
});
