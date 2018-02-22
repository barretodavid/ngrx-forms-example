import { Component } from '@angular/core';
import { Observable } from 'rxjs';
import { InvalidFieldsSelector } from '../store';

@Component({
  selector: 'app-root',
  template: `
    <h1>NgRx Forms Example</h1>
    <nav>
      <a routerLink="/person">Person ({{ personErrors$ | async }})</a>
      <a routerLink="/config">Config</a>
    <nav>
    <router-outlet></router-outlet>
  `,
})
export class RootComponent {
  public personErrors$: Observable<number>;
  constructor(private invalidFieldsSelector: InvalidFieldsSelector) {
    this.personErrors$ = invalidFieldsSelector.personErrors$;
  }
}
