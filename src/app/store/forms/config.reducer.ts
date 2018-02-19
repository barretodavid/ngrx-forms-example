import { updateGroup, validate } from 'ngrx-forms';
import { required } from './utils';

export interface Config {
  minAge: number;
}

export const initialConfigState = {
  minAge: 21,
};

export const configGroupValidation = updateGroup<Config>({
  minAge: validate([required])
});
