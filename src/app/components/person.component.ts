import { Component } from '@angular/core';
import { select, Store } from '@ngrx/store';
import { FormGroupState } from 'ngrx-forms';
import { Observable } from 'rxjs/Observable';
import { Person, State } from '../store';

@Component({
  selector: 'app-person',
  template: `
    <form novalidate [ngrxFormState]="formState$ | async">
      <label>First Name:</label>
      <input type="text" [ngrxFormControlState]="(formState$ | async).controls.firstName" />
      <label>Last Name:</label>
      <input type="text" [ngrxFormControlState]="(formState$ | async).controls.lastName" />
      <label>Age:</label>
      <input type="number" [ngrxFormControlState]="(formState$ | async).controls.age" />
    </form>
  `
})
export class PersonComponent {
  formState$: Observable<FormGroupState<Person>>;

  constructor(private store: Store<State>) {
    this.formState$ = store.pipe(select(state => state.person));
  }
}
