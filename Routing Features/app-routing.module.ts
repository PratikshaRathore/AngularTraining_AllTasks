import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AuthGuardService } from './auth-guard.service';
import { DeactivateGuardService } from './deactivate-guard.service';


import { AboutusComponent } from './aboutus/aboutus.component';
import { DeptsComponent } from './depts/depts.component';
import { DetailsComponent } from './details/details.component';
import { EmpsComponent } from './emps/emps.component';
import { HomeComponent } from './home/home.component';
import { LoginComponent } from './login/login.component';
import { RegisterComponent } from './register/register.component';
import { EmpListResolveService } from './emp-list-resolve.service';
import { Emps2Component } from './emps2/emps2.component';


const routes: Routes = [
      { path :  "", component: HomeComponent },
      { path :  "Emps", component: EmpsComponent, canActivate : [AuthGuardService]  },
      { path :  "Login", component: LoginComponent },
      { path :  "Depts", component: DeptsComponent, canActivate : [AuthGuardService] },
      { path :  "Aboutus", component: AboutusComponent },
      { path :  "Details/:id", component: DetailsComponent },
      { path: 'Register', component: RegisterComponent, canDeactivate:[DeactivateGuardService ] },
      { path: 'admin', loadChildren: () => import('./admin/admin.module').then(m => m.AdminModule) },
      { path :  "Emps2", component: Emps2Component, resolve: {emps: EmpListResolveService}  },
      
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }