import { Component, OnInit } from '@angular/core';
import { AutoUtilitarie } from '../models/models';

import { HttpClient } from '@angular/common/http';


@Component({
  selector: 'app-auto-utilitarie',
  templateUrl: './auto-utilitarie.component.html',
  styleUrls: ['./auto-utilitarie.component.css']
})
export class AutoUtilitarieComponent implements OnInit  {
  utilitarie: AutoUtilitarie[]
  constructor(private http: HttpClient){
  }  
  ngOnInit(): void {
    this.http.get('https://3000-francescoad-tecnologia5-g0a6hgnex7t.ws-eu107.gitpod.io/api').subscribe(data => {
    // Read the result field from the JSON response.
    this.utilitarie = data['Auto utilitarie'];
    });
  }
}
