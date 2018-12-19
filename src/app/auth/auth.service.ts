import { Subject } from 'rxjs';
import { Router } from '@angular/router';
import { User } from './../shared/user.model';
import { UserService } from './../shared/user.service';
import { Injectable, OnInit } from '@angular/core';



@Injectable()
export class AuthService {
    users: User[];
    
    constructor(private userService: UserService,
        private router: Router){
            this.users = this.userService.getUsers();  
            this.userService.userChanged.subscribe(
                (users)=>{
                    this.users = users;
                }
            )       
    }
     

    findUser(email: string, pass: string): User{

        const object = this.users.find(
            (obj)=>{
                return obj.email === email && obj.password === pass;
            }
        )
       // this.loggedrole.next(object.role);
        return object;
    };

    logout(){
        localStorage.clear();
        this.router.navigate(['/']);
        
    }
}