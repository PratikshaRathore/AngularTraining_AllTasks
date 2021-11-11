
import { Injectable } from '@angular/core';
import { ActivatedRouteSnapshot, CanActivate, Router, RouterStateSnapshot } from '@angular/router';

@Injectable({
  providedIn: 'root'
})
export class AuthGuardService implements CanActivate {

  constructor(private router: Router) { }

  public canActivate( next: ActivatedRouteSnapshot, state: RouterStateSnapshot):boolean
  {
    console.log("Message from AuthGuardService - canActivate Method");

    if( sessionStorage.getItem("AUTH_TOKEN")  == null )
    {
      alert("Requested Url  : " + state.url);
      // invalid user
      //  redirect to login
      this.router.navigate(["/Login"], { queryParams : {"returnUrl":state.url}});
      return false;
    }
    else
    {
      // valid user
      return true;
    }
  }
}