import { NgModule } from '@angular/core';
import { AuthComponent } from './auth.component';
import { ForegtPasswordComponent } from './components/foregt-password/foregt-password.component';
import { ResetPasswordComponent } from './components/reset-password/reset-password.component';
import { RouterModule, Routes } from '@angular/router';
import { LoginComponent } from './components/login/login.component';
import { ChangePasswordComponent } from './components/change-password/change-password.component';
import { RegisterComponent } from './components/register/register.component';
import { VerifyAccountComponent } from './components/verify-account/verify-account.component';

const routes: Routes = [
  { path: '', component: AuthComponent , children:[
    { path: '', component: LoginComponent, title: 'Login' },
    { path:'changePass' ,component:ChangePasswordComponent, title: 'change-password' },
    { path: 'register', component: RegisterComponent, title: 'Register' },
    { path: 'forget', component: ForegtPasswordComponent, title: 'forget' },
    { path: 'reset', component: ResetPasswordComponent, title: 'reset' },
    { path: 'verify', component: VerifyAccountComponent, title: 'Verify' }
  ]}
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class AuthRoutingModule { }
