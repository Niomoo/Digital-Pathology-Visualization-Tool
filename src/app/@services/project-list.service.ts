import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { HttpClient } from '@angular/common/http';

import { ProjectArray } from '../@models/project-list.model';

@Injectable({
  providedIn: 'root'
})
export class ProjectListService {
  // private url = 'http://localhost:8000/';
  private url = 'http://140.116.247.175:8000/';
  constructor(private http: HttpClient) { }

  getProject(mail: string): Observable<ProjectArray> {
    return this.http.get(this.url + 'projects/' + mail) as Observable<ProjectArray>;
  }
}
