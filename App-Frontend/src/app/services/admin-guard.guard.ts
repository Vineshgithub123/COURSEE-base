import { Injectable } from '@angular/core';
import { ActivatedRouteSnapshot, CanActivate, Router, RouterStateSnapshot, UrlTree } from '@angular/router';
import { Observable } from 'rxjs';
import { AuthService } from './auth.service';

@Injectable({
  providedIn: 'root'
})
export class AdminGuardGuard implements CanActivate {

  constructor(private auth:AuthService, private router:Router){}
  canActivate():boolean{
  
    if (this.auth.professorloggedIn()){
      
      return true
    }
    
    else{
      alert("You Need to Login to Access")
      this.router.navigate(['/adminlogin'])
      return false;
    }

  }
  
}
