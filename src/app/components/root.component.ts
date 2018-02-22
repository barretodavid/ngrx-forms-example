import { Component } from '@angular/core';
import { Observable } from 'rxjs';
import { InvalidFieldsSelector } from '../store';

@Component({
  selector: 'app-root',
  template: `
    <h1>NgRx Forms Example ({{ appErrors$ | async }})</h1>
    <nav>
      <a routerLink="/person">Person ({{ personErrors$ | async }})</a>
      <a routerLink="/config">Config ({{ configErrors$ | async }})</a>
    <nav>
    <router-outlet></router-outlet>
  `,
})
export class RootComponent {
  public appErrors$: Observable<number>;
  public personErrors$: Observable<number>;
  public configErrors$: Observable<number>;
  constructor(private invalidFieldsSelector: InvalidFieldsSelector) {
    this.appErrors$ = invalidFieldsSelector.appErrors$;
    this.personErrors$ = invalidFieldsSelector.personErrors$;
    this.configErrors$ = invalidFieldsSelector.configErrors$;
  }
}
