import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { ILogin, ILoginResponse,IDecryptedToken,IUserDetails, IChangePass, IForget, IReset, IVerify } from '../../models/auth';
import { jwtDecode } from 'jwt-decode';

HttpClient
@Injectable({
  providedIn: 'root'
})

export class AuthService {
  

  role: string = ''; // Variable to store user role
userName:string=''
  constructor(private _HttpClient: HttpClient){ 
  //to get data again after reloading page (refresh)

    if (localStorage.getItem('userToken') !== null) {
      this.getProfile();
    }
  }
login(loginData: ILogin): Observable<ILoginResponse> {
  return this._HttpClient.post<ILoginResponse>('Users/Login', loginData);
}
getProfile() {
  let encoded: string | null = localStorage.getItem('userToken');
  if (encoded != null) {
    let decoded: IDecryptedToken = jwtDecode(encoded);
    localStorage.setItem('role', decoded.userGroup);
    localStorage.setItem('userName', decoded.userName);
    this.getRole(); // Get user role
  }
  console.log(this.role);

}

// Function to get user role from localStorage
getRole() {
  if (localStorage.getItem('userToken') !== null && localStorage.getItem('role') !== null) {
    this.role = localStorage.getItem('role') ?? '';
  }  

}
getCurrentUser(): Observable<IUserDetails> {
  return this._HttpClient.get<IUserDetails>('Users/CurrentUser');
}

changePass(data:IChangePass):Observable<any>{
  return this._HttpClient.put('Users/ChangePassword',data );
}

register(data: FormData): Observable<any> {
  return this._HttpClient.post('Users/Register', data);
}

forgetPassword(data:IForget):Observable<any>{
return this._HttpClient.post<IForget>('Users/Reset/Request', data)
}

resetPasssword(data:IReset):Observable<any>{
  return this._HttpClient.post<IForget>('Users/Reset', data)
  }
  verify(verifyData: IVerify): Observable<{ message: string }> {
    return this._HttpClient.put<{ message: string }>('Users/verify', verifyData);
  }

}
