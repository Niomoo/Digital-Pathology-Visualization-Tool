import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { LoginPost } from '../@models/login.model';
import { LoginService } from '../@services/login.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
  loginValue: LoginPost = {
    mail: '',
    password: ''
  };
  constructor(private router: Router, private loginService: LoginService) {}

  ngOnInit(): void {
  }

  login() {
    this.loginService.accountLogin(this.loginValue).subscribe((data: any) => {
      if(data.status == 200) {
        this.router.navigate(['home'], {
          queryParams: {
            mail: this.loginValue.mail
          }
        });
      } else {
        alert(data.message);
      }
    })
  }

}
