import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { AutoSportiveComponent } from './auto-sportive/auto-sportive.component';
import { AutoUtilitarieComponent } from './auto-utilitarie/auto-utilitarie.component';
import { HomeComponent } from './home/home.component';
import { HttpClientModule } from '@angular/common/http';

@NgModule({
  declarations: [
    AppComponent,
    AutoSportiveComponent,
    AutoUtilitarieComponent,
    HomeComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule  // Aggiungi HttpClientModule agli imports
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
