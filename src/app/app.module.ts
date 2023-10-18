import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { CounterComponent } from './counter/counter.component';
import { CounterViewerComponent } from './counter-viewer/counter-viewer.component';
import { CounterLayoutComponent } from './counter-layout/counter-layout.component';

@NgModule({
  declarations: [
    AppComponent,
    CounterComponent,
    CounterViewerComponent,
    CounterLayoutComponent
  ],
  imports: [
    BrowserModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
