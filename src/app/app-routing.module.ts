import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ArchiveComponent } from './components/archive/archive.component';
import { CreatenotesComponent } from './components/createnotes/createnotes.component';
import { DashboardComponent } from './components/dashboard/dashboard.component';
import { DisplaynotesComponent } from './components/displaynotes/displaynotes.component';
import { ForgetPasswordComponent } from './components/forget-password/forget-password.component';
import { GetNotesComponent } from './components/get-notes/get-notes.component';
import { IconsComponent } from './components/icons/icons.component';
import { LoginComponent } from './components/login/login.component';
import { RegisterComponent } from './components/register/register.component';
import { ResetPasswordComponent } from './components/reset-password/reset-password.component';
import { TrashComponent } from './components/trash/trash.component';
import { AuthenticationGuard } from './services/authguardService/authentication.guard';

const routes: Routes = [
  { path: '', redirectTo: "/login", pathMatch: 'full' },
  { path: 'login', component: LoginComponent },
  { path: 'home', component: DashboardComponent, canActivate: [AuthenticationGuard] },
  { path: 'registration', component: RegisterComponent },
  { path: 'forgetpassword', component: ForgetPasswordComponent },
  { path: 'resetpassword', component: ResetPasswordComponent },
  {
    path: 'dashboard', component: DashboardComponent,
    children: [
      { path: 'getnotes', component: GetNotesComponent },
      { path: 'archiveNotes', component: ArchiveComponent },
      { path: 'trashNotes', component: TrashComponent },
    ]
  },
  { path: 'icons', component: IconsComponent },
  { path: 'createnotes', component: CreatenotesComponent },
  { path: 'displaynotes', component: DisplaynotesComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
