import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';

import { HttpClientModule,HTTP_INTERCEPTORS } from '@angular/common/http';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { AboutusComponent } from './aboutus/aboutus.component';
import { DeptsComponent } from './depts/depts.component';
import { DetailsComponent } from './details/details.component';
import { EmpsComponent } from './emps/emps.component';
import { HomeComponent } from './home/home.component';
import { LoginComponent } from './login/login.component';
import { SignoutComponent } from './signout/signout.component';
import { CustomHttpInterceptorService } from './custom-http-interceptor.service';
import { RegisterComponent } from './register/register.component';
import { Emps2Component } from './emps2/emps2.component';

@NgModule({
  declarations: [
    AppComponent,
    AboutusComponent,
    DeptsComponent,
    DetailsComponent,
    EmpsComponent,
    HomeComponent,
    LoginComponent,
    SignoutComponent,
    RegisterComponent,
    Emps2Component
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    HttpClientModule,
  ],
  providers: [{provide :  HTTP_INTERCEPTORS, useClass: CustomHttpInterceptorService, multi:true}],
  bootstrap: [AppComponent]
})
export class AppModule { }
