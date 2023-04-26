import { Injectable } from '@angular/core';
import { Observable, timer } from 'rxjs';
import { HttpClient } from '@angular/common/http';
import { Project, ProjectArray } from '../@models/project-list.model';
import { Counter } from '../@models/counter.model';

@Injectable({
  providedIn: 'root'
})
export class ProjectListService {
  projectList: Project[] = [];
  counter!: Counter;
  counterString: string = '';
  firstJudge: string = '';
  secondJudge: string = '';
  firstDuration: string = '';
  secondDuration: string = '';
  isRunning: boolean = true;

  startTimer(): void {
    this.counter = {
      hour: 0,
      minute: 0,
      second: 0
    };
    timer(0, 1000).subscribe(ellapsedCycles => {
      if(this.isRunning) {
        if(this.counter.second == 59) {
          this.counter.minute += 1;
          this.counter.second = 0;
          if(this.counter.minute == 59) {
            this.counter.hour += 1;
            this.counter.minute = 0;
          }
        } else {
          this.counter.second += 1;
        }
        this.counterString = (this.counter.hour < 10 ? '0' + this.counter.hour: this.counter.hour) + ':'
          + (this.counter.minute < 10 ? '0' + this.counter.minute : this.counter.minute) + ':'
          + (this.counter.second < 10 ? '0' + this.counter.second : this.counter.second);
      }
    })
  }
  stopTimer(status: number): void {
    this.isRunning = false;
    switch(status) {
      case 0:
        this.firstDuration = this.counterString;
        break;
      case 1:
        this.secondDuration = this.counterString;
        break;
      default:
        break;
    }
    this.counter.hour = 0;
    this.counter.minute = 0;
    this.counter.second = 0;
  }

}
