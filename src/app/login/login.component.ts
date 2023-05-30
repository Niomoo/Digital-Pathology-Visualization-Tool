import { RecordService } from './../@services/record.service';
import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { LoginPost } from '../@models/user.model';
import { LoginService } from '../@services/login.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
})
export class LoginComponent implements OnInit {
  loginValue: LoginPost = {
    mail: '',
    password: ''
  };
  constructor(
    private router: Router,
    private loginService: LoginService,
    private recordService: RecordService
  ) {}

  ngOnInit(): void {
  }

  login() {
    this.loginService.accountLogin(this.loginValue).subscribe((data: any) => {
      console.log(data.message);
      if(data.status == 200) {
        alert('Login Successfully!');
        this.recordService.u_id = data.message.u_id;
        this.recordService.name = data.message.name;
        this.recordService.mail = data.message.mail;
        this.router.navigate(['home'], {
          queryParams: {
            id: data.message.u_id
          }
        });
      } else {
        alert(data.message);
      }
    })
  }

}
