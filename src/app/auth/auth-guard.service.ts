import { Injectable } from '@angular/core';
import { RouterStateSnapshot } from '@angular/router';
import { ActivatedRouteSnapshot } from '@angular/router';
import { CanActivate, Router } from '@angular/router';
import { AuthService } from './auth.service';

@Injectable()
export class AuthGuard implements CanActivate{
    constructor(private router: Router,
                private authServie: AuthService){}

    canActivate(){
       
        if(localStorage.getItem("currentuserName"))
            return true
       
       
        this.router.navigate(['/']);
        return false
       
    }
}