import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  template: `
    <h1>NgRx Forms POC</h1>
    <nav>
      <a routerLink="/counter">Counter</a>
      <a routerLink="/person">Person</a>
      <a routerLink="/config">Config</a>
    <nav>
    <router-outlet></router-outlet>
  `
})
export class RootComponent {}
