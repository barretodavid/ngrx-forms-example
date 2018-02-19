import { createFormGroupState, createFormGroupReducerWithUpdate, AbstractControlState, FormGroupState, updateGroup, setErrors, setValue, cast} from 'ngrx-forms';
import { Person, initialPersonState, personGroupValidation } from './person.reducer';
import { Config, initialConfigState, configGroupValidation } from './config.reducer';

export interface RootForm {
  person: Person;
  config: Config;
}

export const initialFormState = createFormGroupState<RootForm>('rootForm', {
  person: initialPersonState,
  config: initialConfigState,
});

export const formReducer = createFormGroupReducerWithUpdate<RootForm>(
  {
    person: personGroupValidation,
    config: configGroupValidation,
  },
  {
    person: (person: AbstractControlState<Person>, myForm: FormGroupState<RootForm>) => updateGroup<Person>({
      age: (age: AbstractControlState<number>) => {
        const minAgeValue = (<FormGroupState<Config>>myForm.controls.config).controls.minAge.value;
        if (age.value < minAgeValue) {
          return setErrors({ minAge: true }, setValue(age.value, age));
        } else {
          return setErrors({}, setValue(age.value, age));
        }
      }
    })(cast(person))
  }
);
