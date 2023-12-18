import { Component, OnInit } from '@angular/core';
import { AutoSportive } from '../models/models';
import {  Router } from '@angular/router';
import { HttpClient } from '@angular/common/http';

@Component({
  selector: 'app-auto-sportive',
  templateUrl: './auto-sportive.component.html',
  styleUrls: ['./auto-sportive.component.css']
})
export class AutoSportiveComponent implements OnInit {
  sportive:AutoSportive[];
  constructor(private http: HttpClient){
  }  
  ngOnInit(): void {
    this.http.get('https://3000-francescoad-tecnologia5-g0a6hgnex7t.ws-eu107.gitpod.io/api').subscribe(data => {
    // Read the result field from the JSON response.
    this.sportive = data['Auto Sportive'];
    });
  }
}
