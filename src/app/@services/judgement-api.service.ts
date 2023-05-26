import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

import { JudgeRecord, JudgementArray } from '../@models/judgement.model';

@Injectable({
  providedIn: 'root',
})
export class JudgementApiService {
  // private url = 'http://localhost:8000/';
  private url = 'http://140.116.247.180:8081/';
  constructor(private http: HttpClient) {}

  postJudgement(value: JudgeRecord) {
    console.log(value);
    return this.http.post(this.url + 'judgement/', value);
  }

  getJudgement(id: number): Observable<JudgementArray> {
    return this.http.get(this.url + 'judgement/' + id) as Observable<JudgementArray>;
  }
}
