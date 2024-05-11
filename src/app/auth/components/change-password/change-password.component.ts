import { Component } from '@angular/core';
import { AuthService } from '../../services/auth/auth.service';
import { FormControl, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-change-password',
  templateUrl: './change-password.component.html',
  styleUrls: ['./change-password.component.scss']
})
export class ChangePasswordComponent {
  isLoading:boolean=false;

  constructor(private _AuthService: AuthService) { }

  //changepassword form
  changePasswordForm: FormGroup = new FormGroup({
    oldPassword: new FormControl(null, [Validators.required]),
    newPassword: new FormControl(null, [Validators.required]),
    confirmNewPassword: new FormControl(null, [Validators.required])
  })

  //handle changepassword
  onChangePassword(changePasswordForm:FormGroup){
    this.isLoading=true;
    this._AuthService.changePassword(changePasswordForm.value).subscribe({
      next:(res)=>{
        console.log(res);
      },error:(err)=>{
        console.log(err);
      }
    })

  }


}
