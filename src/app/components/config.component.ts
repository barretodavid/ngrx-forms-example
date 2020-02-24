import { Component } from '@angular/core';
import { select, Store } from '@ngrx/store';
import { FormGroupState } from 'ngrx-forms';
import { Observable } from 'rxjs';

import { AppState } from '../store';
import { Config } from '../models';

@Component({
  selector: 'app-config',
  template: `
    <form novalidate [ngrxFormState]="configForm$ | async">
      <label>Min Age:</label>
      <input type="number" [ngrxFormControlState]="(configForm$ | async).controls.minAge" />
    </form>
  `,
})
export class ConfigComponent {
  configForm$: Observable<FormGroupState<Config>>;

  constructor(private store: Store<AppState>) {
    this.configForm$ = store.pipe(
      select(state => <FormGroupState<Config>>state.form.controls.config),
    );
  }
}
