import { AuthService } from './../auth/auth.service';
import { ActivatedRoute } from '@angular/router';
import { Component, OnInit } from '@angular/core';
import { UserService } from '../shared/user.service';
import { User } from '../shared/user.model';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit {
  
  currentuser: string;
  constructor(private userService: UserService,
              private authService: AuthService) { }

  ngOnInit() {
    this.currentuser = localStorage.getItem("currentuserName")
    this.userService.loggedUserName.subscribe(
      (name)=>{
        this.currentuser = name;
      }
    )
  }

  logout(){
    this.authService.logout();
    this.currentuser= null;
  }

}
