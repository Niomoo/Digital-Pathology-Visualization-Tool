import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { HttpClient } from '@angular/common/http';

import { ProjectArray } from '../@models/project.model';
import { environment } from 'src/environments/environment';

@Injectable({
  providedIn: 'root'
})
export class ProjectAPIService {
  constructor(private http: HttpClient) { }

  getProject(id: number): Observable<ProjectArray> {
    return this.http.get(`${environment.baseUrl}` + 'project/' + id) as Observable<ProjectArray>;
  }
}
