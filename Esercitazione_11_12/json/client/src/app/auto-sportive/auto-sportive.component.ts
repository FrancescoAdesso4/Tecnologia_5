import { Component } from '@angular/core';
import { AutoSportive } from '../models/models';
import {  Router } from '@angular/router';
import { HttpClient } from '@angular/common/http';

@Component({
  selector: 'app-auto-sportive',
  templateUrl: './auto-sportive.component.html',
  styleUrls: ['./auto-sportive.component.css']
})
export class AutoSportiveComponent {
  sportive:AutoSportive[];
  constructor(private router:Router){
    this.sportive = this.router.getCurrentNavigation().extras.state as AutoSportive[];
  }  
}
