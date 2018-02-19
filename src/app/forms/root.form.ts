import { createFormGroupState, FormGroupState, createFormGroupReducerWithUpdate, updateGroup, validate, AbstractControlState, cast, setErrors, setValue } from 'ngrx-forms';
import { counterReducer, counterInitialValue } from '../store';

// --- person

export interface Person {
  firstName: string;
  lastName: string;
  age: number;
}

const initialPersonState = {
  firstName: '',
  lastName: '',
  age: null,
};

const personGroupValidation = updateGroup<Person>({
  firstName: validate(required),
  lastName: validate(required),
});

// -------- config

export interface Config {
  minAge: number;
}

const initialConfigState = {
  minAge: 21,
};

const configGroupValidation = updateGroup<Config>({
  minAge: validate([required])
});

// ----- root

export interface RootForm {
  person: Person;
  config: Config;
}

const initialFormState = createFormGroupState<RootForm>('rootForm', {
  person: initialPersonState,
  config: initialConfigState,
});

const myFormReducer = createFormGroupReducerWithUpdate<RootForm>(
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

export interface AppState {
  counter: number;
  myForm: FormGroupState<RootForm>;
}

export const initialState: AppState = {
  counter: counterInitialValue,
  myForm: initialFormState,
}

export const rootReducer = {
  counter: counterReducer,
  myForm: myFormReducer,
};


// --- util

function minAge(minAge: number) {
  return (value: number) => {
    return value >= minAge ? {} : { minAge: [value, minAge] };
  }
}

function required(value: any) {
  return !!value ? {} : { required: true };
}

function min(minValue: number) {
  return (value: number) => {
    return value >= minValue ? {} : { min: [value, minValue] };
  }
}
