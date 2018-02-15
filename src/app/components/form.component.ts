import { Component } from '@angular/core';
import { select, Store } from '@ngrx/store';
import { FormGroupState } from 'ngrx-forms';
import { Observable } from 'rxjs/Observable';
import { Form, State } from '../store';

@Component({
  selector: 'app-form',
  template: `
    <form novalidate [ngrxFormState]="formState$ | async">
      <label>First Name:</label>
      <input type="text" [ngrxFormControlState]="(formState$ | async).controls.firstName" />
      <label>Last Name:</label>
      <input type="text" [ngrxFormControlState]="(formState$ | async).controls.lastName" />
    </form>
  `
})
export class FormComponent {
  formState$: Observable<FormGroupState<Form>>;

  constructor(private store: Store<State>) {
    this.formState$ = store.pipe(select('form'));
  }
}
