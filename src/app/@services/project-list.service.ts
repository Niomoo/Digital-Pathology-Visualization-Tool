import { Injectable } from '@angular/core';
import { interval } from 'rxjs';
import { HttpClient } from '@angular/common/http';
import { Project, ProjectArray } from '../@models/project-list.model';
import { Counter } from '../@models/counter.model';

@Injectable({
  providedIn: 'root'
})
export class ProjectListService {
  projectList: ProjectArray = [];
  selectProject!: Project;
  counter!: Counter;
  firstJudge: string = '';
  secondJudge: string = '';
  firstDuration: string = '';
  secondDuration: string = '';

  formatTime(seconds: number): string {
    const second = Math.floor(seconds / 1000);
    const minute = Math.floor(second / 60);
    const hour = Math.floor(minute / 60);
    const secondPart = second % 60;
    const minutePart = minute % 60;
    const hourPart = hour % 60;
    return `${this.formatNumber(hourPart)}:${this.formatNumber(minutePart)}:${this.formatNumber(secondPart)}`;
  }

  formatNumber(num: number): string {
    return num.toString().padStart(2, '0');
  }
}
