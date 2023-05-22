import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { HttpClient } from '@angular/common/http';

import { ProjectArray } from '../@models/project.model';

@Injectable({
  providedIn: 'root'
})
export class ProjectAPIService {
  // private url = 'http://localhost:8000/';
  private url = 'http://140.116.247.180:8081/';
  constructor(private http: HttpClient) { }

  getProject(id: number): Observable<ProjectArray> {
    return this.http.get(this.url + 'projects/' + id) as Observable<ProjectArray>;
  }
}
