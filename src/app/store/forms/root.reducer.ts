import {
  createFormGroupState,
  createFormGroupReducerWithUpdate,
  AbstractControlState,
  FormGroupState,
  updateGroup,
  setErrors,
  setValue,
  cast,
  validate,
} from 'ngrx-forms';

import { initialPersonState, personGroupValidation } from './person.reducer';
import { initialConfigState, configGroupValidation } from './config.reducer';
import { minAge } from './utils';
import { Person, Config } from '../../models';

export interface RootForm {
  person: Person;
  config: Config;
}

export const initialFormState = createFormGroupState<RootForm>('form', {
  person: initialPersonState,
  config: initialConfigState,
});

export const formReducer = createFormGroupReducerWithUpdate<RootForm>(
  {
    person: personGroupValidation,
    config: configGroupValidation,
  },
  {
    person: (
      person: AbstractControlState<Person>,
      myForm: FormGroupState<RootForm>,
    ) =>
      updateGroup<Person>({
        age: (age: AbstractControlState<number>) => {
          const minAgeValue = (<FormGroupState<Config>>myForm.controls.config)
            .controls.minAge.value;
          return validate(minAge(minAgeValue), setValue(age.value, age));
        },
      })(cast(person)),
  },
);
