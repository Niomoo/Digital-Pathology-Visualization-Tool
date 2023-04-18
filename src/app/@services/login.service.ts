import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { LoginPost } from '../@models/login.model';

@Injectable({
  providedIn: 'root'
})
export class LoginService {
  // private url = 'http://localhost:8000/';
  private url = 'http://140.116.247.175:8000/';
  constructor(private http: HttpClient) { }

  accountLogin(value: LoginPost) {
    return this.http.post(this.url + 'users/', value);
  }
}
