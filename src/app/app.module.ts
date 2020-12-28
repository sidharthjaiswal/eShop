import { BrowserModule } from '@angular/platform-browser';
import { NgModule, LOCALE_ID } from '@angular/core';
import { registerLocaleData } from '@angular/common';
import localeDe from '@angular/common/locales/de';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { ViewerModule } from './viewer/viewer.module';

@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    ViewerModule
  ],
  providers: [
    {
      provide: LOCALE_ID,
      useValue: 'de'
    }
  ],
  bootstrap: [AppComponent]
})
export class AppModule {
  constructor() {
    registerLocaleData(localeDe);
  }
}