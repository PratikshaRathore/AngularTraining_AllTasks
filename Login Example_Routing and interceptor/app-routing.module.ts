import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AuthGuardService } from './auth-guard.service';

import { AboutusComponent } from './aboutus/aboutus.component';
import { DeptsComponent } from './depts/depts.component';
import { DetailsComponent } from './details/details.component';
import { EmpsComponent } from './emps/emps.component';
import { HomeComponent } from './home/home.component';
import { LoginComponent } from './login/login.component';

const routes: Routes = [
      { path :  "", component: HomeComponent },
      { path :  "Emps", component: EmpsComponent, canActivate : [AuthGuardService]  },
      { path :  "Login", component: LoginComponent },
      { path :  "Depts", component: DeptsComponent, canActivate : [AuthGuardService] },
      { path :  "Aboutus", component: AboutusComponent },
      { path :  "Details/:id", component: DetailsComponent },
      
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }