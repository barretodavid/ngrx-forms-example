import { Component } from '@angular/core';
// import { select, Store } from '@ngrx/store';
// import { FormGroupState } from 'ngrx-forms';
// import { Observable } from 'rxjs/Observable';
// import { Person, State } from '../store';

@Component({
  selector: 'app-config',
  template: `
    <form novalidate>
      <label>Min Age:</label>
      <input type="number" />
    </form>
  `
})
export class ConfigComponent {
  // formState$: Observable<FormGroupState<Person>>;

  // constructor(private store: Store<State>) {
  //   this.formState$ = store.pipe(select(state => state.person));
  // }
}
