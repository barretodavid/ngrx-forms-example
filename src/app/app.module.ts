import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { StoreModule } from '@ngrx/store';
import { NgrxFormsModule } from 'ngrx-forms';
import { StoreDevtoolsModule } from '@ngrx/store-devtools';

import { AppRoutingModule } from './app-routing.module';
import { RootComponent, CounterComponent, PersonComponent, ConfigComponent } from './components';
// import { rootReducer, initialState } from './store';
import { rootReducer, initialState } from './forms';


@NgModule({
  imports: [
    BrowserModule,
    AppRoutingModule,
    NgrxFormsModule,
    StoreModule.forRoot(rootReducer, { initialState }),
    StoreDevtoolsModule.instrument()
  ],
  declarations: [
    RootComponent,
    PersonComponent,
    CounterComponent,
    ConfigComponent,
  ],
  providers: [],
  bootstrap: [RootComponent]
})
export class AppModule { }
