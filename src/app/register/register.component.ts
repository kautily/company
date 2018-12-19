import { User } from './../shared/user.model';
import { UserService } from './../shared/user.service';
import { NgForm } from '@angular/forms';
import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})
export class RegisterComponent implements OnInit {
  constructor(private userService: UserService,
    private router: Router) { }
    
    ngOnInit() {
    }
    onFormSubmit(form: NgForm){
      let newUser = new User;
      newUser.name = form.value.uname;
      newUser.email = form.value.email;
      newUser.phone = form.value.mobile;
      newUser.userName = form.value.userName;
      newUser.password = form.value.pass;
      newUser.role = form.value.role;      
      this.userService.addUser(newUser);
      this.router.navigate(['/']);
    }
    
    cancel(){
      this.router.navigate(['/']);
      
  }
}
