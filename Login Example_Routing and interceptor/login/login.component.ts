

import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent  {

    public uid: string = "admin";
    public pwd: string = "admin123";
    public result: string = "";

    constructor(private router: Router, private activatedRoute: ActivatedRoute) { }


    login_click()
    {

       let requestedUrl = this.activatedRoute.snapshot.queryParams["returnUrl"];

       if(requestedUrl == "" || requestedUrl == null)
       {
         requestedUrl = "/";
       }

        if(this.uid == "admin" && this.pwd == "admin123")
        {
            sessionStorage.setItem("AUTH_TOKEN",  this.uid);
            this.router.navigate([requestedUrl]);
        }
        else
        {
          this.result  ="Invalid user id or password";
        }
    }


}