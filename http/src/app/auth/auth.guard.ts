import { Injectable } from '@angular/core';
import { Router, CanActivate, ActivatedRouteSnapshot, RouterStateSnapshot, UrlTree } from '@angular/router';
import { Observable } from 'rxjs';

@Injectable({
    providedIn: 'root'
})
export class AuthGuard implements CanActivate {

    isLogin = true;

    constructor(private router: Router) { }

    canActivate() {
        if(!this.isLogin) {
            this.router.navigate(['list']); //강제이동될 페이지
            alert('로그인을 해주세요.');
            return false;
        }
        return true;
    }
}
