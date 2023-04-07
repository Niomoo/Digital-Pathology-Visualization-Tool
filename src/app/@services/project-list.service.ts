import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { HttpClient } from '@angular/common/http';

import { ProjectArray } from '../@models/project-list.model';

@Injectable({
  providedIn: 'root'
})
export class ProjectListService {
  private url = 'http://140.116.247.175:8000/api/';
  constructor(private http: HttpClient) { }

  getProject(): Observable<ProjectArray> {
    return this.http.get(this.url + 'project/') as Observable<ProjectArray>;
  }
}
