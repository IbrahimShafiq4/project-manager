import { HttpClient } from '@angular/common/http';
import { IChangePass } from './../../models/auth';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';



@Injectable({
  providedIn: 'root'
})
export class AuthService {

constructor(private _HttpClient:HttpClient) { }

//change password
changePassword(data:IChangePass):Observable<any>{
  return this._HttpClient.put('Users/ChangePassword',data )
}

}
