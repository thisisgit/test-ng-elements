import {BrowserModule} from '@angular/platform-browser';
import {Injector, NgModule} from '@angular/core';

import {AppComponent} from './app.component';
import {createCustomElement} from '@angular/elements';
import 'zone.js/dist/zone';

@NgModule({
  imports: [
    BrowserModule
  ],
  declarations: [AppComponent],
  entryComponents: [AppComponent]
})
export class AppModule {
  constructor(private injector: Injector) {
    const el = createCustomElement(AppComponent, {injector});
    customElements.define('test-ng-element', el);
  }

  ngDoBootstrap() {
  }
}
