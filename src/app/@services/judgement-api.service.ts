import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { HttpClient } from '@angular/common/http';

import { Judgement } from '../@models/project.model';
import { RecordArray } from '../@models/record.model';
import { environment } from 'src/environments/environment';

@Injectable({
  providedIn: 'root',
})
export class JudgementAPIService {
  constructor(private http: HttpClient) {}

  postJudgement(value: Judgement) {
    console.log(value);
    return this.http.post(`${environment.baseUrl}` + 'judgement/', value);
  }

  getJudgement(id: number): Observable<RecordArray> {
    return this.http.get(`${environment.baseUrl}` + 'judgement/' + id) as Observable<RecordArray>;
  }
}
