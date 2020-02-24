import {
  createFormGroupState,
  createFormStateReducerWithUpdate,
  AbstractControlState,
  FormGroupState,
  updateGroup,
  validate,
} from 'ngrx-forms';

import { initialPersonState, personGroupValidation } from './person.reducer';
import { initialConfigState, configGroupValidation } from './config.reducer';
import { minAge } from './utils';
import { Person, Config } from '../models';

export interface RootForm {
  person: Person;
  config: Config;
}

export const initialFormState = createFormGroupState<RootForm>('form', {
  person: initialPersonState,
  config: initialConfigState,
});

export const formReducer = createFormStateReducerWithUpdate<RootForm>(
  updateGroup<RootForm>({
    person: personGroupValidation,
    config: configGroupValidation,
  },
    {
      person: (
        person: FormGroupState<Person>,
        rootForm: FormGroupState<RootForm>,
      ) =>
        updateGroup<Person>({
          age: (age: AbstractControlState<number>) => {
            const minAgeValue = (<FormGroupState<Config>>rootForm.controls.config)
              .controls.minAge.value;
            return validate<number>(age, minAge(minAgeValue));
          },
        })(person),
    })
);

export interface AppState {
  form: FormGroupState<RootForm>;
}

export const initialState: AppState = {
  form: initialFormState,
};

export const rootReducer = {
  form: formReducer,
};
