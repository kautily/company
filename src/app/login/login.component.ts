import { AuthService } from './../auth/auth.service';
import { UserService } from './../shared/user.service';
import { NgForm } from '@angular/forms';
import { Component, OnInit } from '@angular/core';
import { User } from '../shared/user.model';
import { Router, ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  constructor(private authService: AuthService,
              private router: Router,
              private userService: UserService,
              ) { }

  ngOnInit() {
  }
  onFormSubmit(form: NgForm){
    const email = form.value.email;
    const pass = form.value.pass;
    
    let obj = this.authService.findUser(email, pass);
    if(obj){
      localStorage.setItem('currentuserName', obj.name);
      localStorage.setItem('currentuserId', obj.email);      
      localStorage.setItem('currentuserRole', obj.role);  
      this.userService.loggedUserName.next(obj.name);
      this.router.navigate([obj.role]);
    }
    form.reset();
  }

}
