import { updateGroup, validate } from 'ngrx-forms';
import { required, greaterThanOrEqualTo } from 'ngrx-forms/validation';

import { Config } from '../models';

export const initialConfigState = {
  minAge: 21,
};

export const configGroupValidation = updateGroup<Config>({
  minAge: validate([required, greaterThanOrEqualTo(0)]),
});
