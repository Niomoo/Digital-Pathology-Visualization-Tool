import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { RecordService } from '../@services/record.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
})
export class HomeComponent implements OnInit {
  constructor(
    private router: Router,
    private recordService: RecordService
  ) {}

  get u_id() : number {
    return this.recordService.u_id;
  }

  get name() : string {
    return this.recordService.name;
  }

  get mail() : string {
    return this.recordService.mail;
  }

  ngOnInit(): void {

  }

  logout() {
    this.router.navigateByUrl('/login');
  }
}
