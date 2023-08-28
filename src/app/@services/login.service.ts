import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { LoginPost, RegisterPost } from '../@models/user.model';
import { environment } from 'src/environments/environment';

@Injectable({
  providedIn: 'root'
})
export class LoginService {
  constructor(private http: HttpClient) { }

  accountLogin(value: LoginPost) {
    return this.http.post(`${environment.baseUrl}` + 'user/login', value);
  }

  accountRegister(value: RegisterPost) {
    return this.http.post(`${environment.baseUrl}` + 'user/', value);
  }
}
