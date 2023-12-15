import { Component, OnInit } from '@angular/core';
import { AutoSportive, AutoUtilitarie } from './models/models';
import {HttpClient} from '@angular/common/http'; 

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit{
  AutoSp: AutoSportive[]
  AutoUt: AutoUtilitarie[]
  constructor(private http:HttpClient){}
  ngOnInit(): void{
    this.http.get('https://3000-francescoad-tecnologia5-g0a6hgnex7t.ws-eu107.gitpod.io/api').subscribe(data => {
// Read the result field from the JSON response.
  this.AutoSp = data["Auto Sportive"];
  this.AutoUt = data["Auto utilitarie"];

});
  }
}
