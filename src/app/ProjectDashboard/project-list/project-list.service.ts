import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { HttpClient } from '@angular/common/http';

import { ProjectArray } from './project-list';

@Injectable({
  providedIn: 'root'
})
export class ProjectListService {

  constructor(private http: HttpClient) { }

  getProject(): Observable<ProjectArray> {
    return this.http.get('http://127.0.0.1:8000/api/projects') as Observable<ProjectArray>;
  }
}
