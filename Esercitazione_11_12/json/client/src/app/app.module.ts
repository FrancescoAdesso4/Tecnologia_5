import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { AutoSportiveComponent } from './auto-sportive/auto-sportive.component';
import { AutoUtilitarieComponent } from './auto-utilitarie/auto-utilitarie.component';

@NgModule({
  declarations: [
    AppComponent,
    AutoSportiveComponent,
    AutoUtilitarieComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
