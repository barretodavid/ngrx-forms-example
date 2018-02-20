import { Injectable } from '@angular/core';
import { select, Store } from '@ngrx/store';
import { FormGroupState, ValidationErrors } from 'ngrx-forms';

import { AppState } from './root.reducer';
import { Person } from '../models';

@Injectable()
export class InvalidFieldsSelector {
  personErrors$;
  constructor(private store: Store<AppState>) {
    this.personErrors$ = store.pipe(
      select(state => {
        const errors = (<FormGroupState<Person>>state.form.controls.person)
          .errors;
        return countValidationErrors(errors);
      }),
    );
  }
}

function countValidationErrors(errors: ValidationErrors): number {
  return Object.keys(errors).reduce((prev, acc) => {
    return prev + 1;
  }, 0);
}
