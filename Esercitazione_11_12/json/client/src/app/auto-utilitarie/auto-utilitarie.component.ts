import { Component, OnInit } from '@angular/core';
import { AutoUtilitarie } from '../models/models';
import { Router } from '@angular/router';


@Component({
  selector: 'app-auto-utilitarie',
  templateUrl: './auto-utilitarie.component.html',
  styleUrls: ['./auto-utilitarie.component.css']
})
export class AutoUtilitarieComponent  {
  utilitarie:AutoUtilitarie[];
  constructor(private router:Router){
    this.utilitarie = this.router.getCurrentNavigation().extras.state as AutoUtilitarie[];
  }
  
}
