import { updateGroup, validate } from 'ngrx-forms';

import { Config } from '../../models';
import { required, min } from './utils';

export const initialConfigState = {
  minAge: 21,
};

export const configGroupValidation = updateGroup<Config>({
  minAge: validate([required, min(0)]),
});
