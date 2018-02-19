import { createFormGroupState, FormGroupState, createFormGroupReducerWithUpdate, updateGroup, validate, AbstractControlState, cast } from 'ngrx-forms';



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

export interface AppState {
  myForm: FormGroupState<MyFormValue>;
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

const initialState: AppState = {
  myForm: initialFormState,
}

const myFormReducer = createFormGroupReducerWithUpdate<MyFormValue>(
    {
    person: updateGroup<Person>({
      firstName: validate(required),
      lastName: validate(required),
    }),
    config: updateGroup<Config>({
      minAge: validate([required, min(21)])
    })
  },
  {
    person: (person: AbstractControlState<Person>, myForm: FormGroupState<MyFormValue>) => updateGroup<Person>({
      age: (age: AbstractControlState<number>) => {
        if(myForm.controls.config.)
        return age;
      }
    })(cast(person))
  }
);



function required(value: any) {
  return !!value ? {} : { required: true };
}

function min(minValue: number) {
  return (value: number) => {
    return value >= minValue ? {} : { min: [value, minValue] };
  }
}
