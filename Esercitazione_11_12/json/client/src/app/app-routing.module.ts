import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AutoSportiveComponent } from './auto-sportive/auto-sportive.component';
import { AutoUtilitarieComponent } from './auto-utilitarie/auto-utilitarie.component';
import { HomeComponent } from './home/home.component';

const routes: Routes = [
  
  { path: '', redirectTo: '/home', pathMatch: 'full' },
  { path: 'auto-sportive', component: AutoSportiveComponent },
  { path: 'auto-utilitarie', component: AutoUtilitarieComponent },
  { path: 'home', component: HomeComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
