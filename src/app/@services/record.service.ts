import { Injectable } from '@angular/core';
import { Observable, BehaviorSubject } from 'rxjs';
import { Project, ProjectArray, Image, ImageArray } from '../@models/project.model';
import { Counter } from '../@models/counter.model';

@Injectable({
  providedIn: 'root',
})
export class RecordService {
  selectProject = new BehaviorSubject<Project>({
    p_id: 0,
    title: 'test',
  });
  selectProject$ = this.selectProject.asObservable();
  projectList: ProjectArray = [];
  selectImage!: Image;
  imageList: ImageArray = [];
  counter!: Counter;
  firstJudge: string = '';
  secondJudge: string = '';
  firstDuration: string = '';
  secondDuration: string = '';
  u_id = 1;
  name = "Jenny";
  mail = "myEmail@gmail.com";

  formatTime(seconds: number): string {
    const second = Math.floor(seconds / 1000);
    const minute = Math.floor(second / 60);
    const hour = Math.floor(minute / 60);
    const secondPart = second % 60;
    const minutePart = minute % 60;
    const hourPart = hour % 60;
    return `${this.formatNumber(hourPart)}:${this.formatNumber(
      minutePart
    )}:${this.formatNumber(secondPart)}`;
  }

  formatNumber(num: number): string {
    return num.toString().padStart(2, '0');
  }

  updateProject(project: Project) {
    this.selectProject.next(project);
  }
}
