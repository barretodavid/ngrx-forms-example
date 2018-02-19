import { createFormGroupState, FormGroupState, createFormGroupReducerWithUpdate, updateGroup, validate, AbstractControlState, cast, setErrors, setValue } from 'ngrx-forms';
import { counterReducer, counterInitialValue } from '../store';


export interface Person {
  firstName: string;
  lastName: string;
  age: number;
}

export interface Config {
  minAge: number;
}

// export interface Form {
//   person: FormGroupState<Person>;
//   config: FormGroupState<Config>;
// }

export interface MyFormValue {
  person: Person;
  config: Config;
}



const initialFormState = createFormGroupState<MyFormValue>('myForm', {
  person: {
    firstName: '',
    lastName: '',
    age: null,
  },
  config: {
    minAge: 21,
  },
});



const myFormReducer = createFormGroupReducerWithUpdate<MyFormValue>(
    {
    person: updateGroup<Person>({
      firstName: validate(required),
      lastName: validate(required),
    }),
    config: updateGroup<Config>({
      minAge: validate([required])
    })
  },
  {
    person: (person: AbstractControlState<Person>, myForm: FormGroupState<MyFormValue>) => updateGroup<Person>({
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

export interface AppState {
  counter: number;
  myForm: FormGroupState<MyFormValue>;
}

export const initialState: AppState = {
  counter: counterInitialValue,
  myForm: initialFormState,
}

export const rootReducer = {
  counter: counterReducer,
  myForm: myFormReducer,
};
