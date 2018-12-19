import { ActivatedRoute, Params, Router } from '@angular/router';
import { UserService } from './shared/user.service';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {
  title = 'app';
  constructor(){}


  ngOnInit(){
   
  }

}
