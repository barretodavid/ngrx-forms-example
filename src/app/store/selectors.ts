import { Injectable } from '@angular/core';
import { select, Store } from '@ngrx/store';
import {
  FormGroupState,
  ValidationErrors,
  AbstractControlState,
} from 'ngrx-forms';
import { Observable } from 'rxjs/Observable';

import { AppState, RootForm } from './root.reducer';
import { Person } from '../models';

@Injectable()
export class InvalidFieldsSelector {
  appErrors$: Observable<number>;
  personErrors$: Observable<number>;
  configErrors$: Observable<number>;

  constructor(private store: Store<AppState>) {
    this.appErrors$ = store.pipe(
      select(state => countValidationErrors(state.form)),
    );
    this.personErrors$ = store.pipe(
      select(state => countValidationErrors(state.form.controls.person)),
    );
    this.configErrors$ = store.pipe(
      select(state => countValidationErrors(state.form.controls.config)),
    );
  }
}

function countValidationErrors(control: AbstractControlState<any>): number {
  if (control.isPristine) {
    return 0;
  }
  const subControl = (<FormGroupState<any>>control).controls;
  if (subControl) {
    return Object.keys(subControl).reduce((errors, key) => {
      return countValidationErrors(subControl[key]) + errors;
    }, 0);
  } else {
    return Object.keys(control.errors).reduce(errors => {
      return errors + 1;
    }, 0);
  }
}
