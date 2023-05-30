import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { RegisterPost } from '../@models/user.model';
import { LoginService } from '../@services/login.service';
import { RecordService } from '../@services/record.service';

@Component({
  selector: 'app-login',
  templateUrl: './register.component.html',
})
export class RegisterComponent implements OnInit {
  registerValue: RegisterPost = {
    name: '',
    mail: '',
    password: ''
  };
  password_confirm: string = '';

  constructor(
    private router: Router,
    private loginService: LoginService,
    private recordService: RecordService
  ) {}

  ngOnInit(): void {
  }

  register() {
    if(this.registerValue.password == this.password_confirm) {
      this.loginService.accountRegister(this.registerValue).subscribe((data: any) => {
        if(data.status == 201) {
          alert('Register successfully!');
          console.log(data.message);
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
    } else {
      alert('Please type in the same password!')
    }
  }

  back() {
    this.router.navigate(['login']);
  }
}
