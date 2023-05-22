import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

import { JudgeRecord, JudgementArray } from '../@models/judgement.model';

@Injectable({
  providedIn: 'root',
})
export class JudgementApiService {
  private url = 'http://140.116.247.180:8888/';
  constructor(private http: HttpClient) {}

  postJudgement(value: JudgeRecord) {
    return this.http.post(this.url + 'judgement/', value);
  }

  getJudgement(id: number): Observable<JudgementArray> {
    return this.http.get(this.url + 'judgement/' + id) as Observable<JudgementArray>;
  }
}
