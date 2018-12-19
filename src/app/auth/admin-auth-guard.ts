import { AuthService } from './auth.service';
import { Injectable } from '@angular/core';
import { CanActivate, Router } from '@angular/router';

@Injectable()
export class AdminAuthGuard implements CanActivate{
    constructor(private router: Router ,
                private authService: AuthService){}

    canActivate(){
        if(localStorage.getItem("currentuserRole") === 'admin')
            return true
        
        
        alert(" You are not authorised")
        return false;
    }
}