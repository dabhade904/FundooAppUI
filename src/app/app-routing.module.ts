import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { CreatenotesComponent } from './components/createnotes/createnotes.component';
import { DashboardComponent } from './components/dashboard/dashboard.component';
import { ForgetPasswordComponent } from './components/forget-password/forget-password.component';
import { LoginComponent } from './components/login/login.component';
import { RegisterComponent } from './components/register/register.component';
import { ResetPasswordComponent } from './components/reset-password/reset-password.component';

const routes: Routes = [
  { path: 'registration', component: RegisterComponent },
  { path: 'login', component: LoginComponent },
  { path: 'forgetpassword', component: ForgetPasswordComponent },
  { path: 'resetpassword', component: ResetPasswordComponent },
  {
    path: 'dashboard', component: DashboardComponent,
    children: [
      {path :'createnotes',component:CreatenotesComponent}
    ]
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
