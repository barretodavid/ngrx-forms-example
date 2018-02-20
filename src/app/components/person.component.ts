import { Component } from '@angular/core';
import { select, Store } from '@ngrx/store';
import { FormGroupState, AbstractControlState } from 'ngrx-forms';
import { Observable } from 'rxjs/Observable';

import { AppState } from '../store';
import { Person } from '../models';

@Component({
  selector: 'app-person',
  template: `
    <form novalidate [ngrxFormState]="personForm$ | async">
      <label>First Name:</label>
      <input type="text" [ngrxFormControlState]="(personForm$ | async).controls.firstName" />
      <label>Last Name:</label>
      <input type="text" [ngrxFormControlState]="(personForm$ | async).controls.lastName" />
      <label>Age:</label>
      <input type="number" [ngrxFormControlState]="(personForm$ | async).controls.age" />
    </form>
  `,
})
export class PersonComponent {
  personForm$: Observable<FormGroupState<Person>>;

  constructor(private store: Store<AppState>) {
    this.personForm$ = store.pipe(
      select(state => <FormGroupState<Person>>state.myForm.controls.person),
    );
  }
}
