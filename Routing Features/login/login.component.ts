import { HttpClient } from '@angular/common/http';
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

    constructor(private router: Router, private activatedRoute: ActivatedRoute, private httpObj: HttpClient) { }


    login_click()
    {

       let requestedUrl = this.activatedRoute.snapshot.queryParams["returnUrl"];

       if(requestedUrl == "" || requestedUrl == null)
       {
         requestedUrl = "/";
       }


    //    // with database, using json-server-auth
    //    let userObj:any= {};
    //    userObj.email = this.uid;
    //    userObj.password = this.pwd;

    //    let url:string   = "http://localhost:3000/login";

    //   this.httpObj.post<any>(url,  userObj).subscribe(

    // (response:any) =>{
    //      console.log(response);
    //      sessionStorage.setItem("AUTH_TOKEN",  response.accessToken);
    //     this.router.navigate([requestedUrl]);
    //   },

    //   (error) =>  {
    //    this.result  ="Invalid user id or password";
    //    }
    //   );



      
        // Without database -- hardcoded values
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