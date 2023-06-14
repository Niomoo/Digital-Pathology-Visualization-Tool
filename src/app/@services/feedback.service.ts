import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { FeedbackPost } from '../@models/feedback.model';

@Injectable({
  providedIn: 'root'
})
export class FeedbackService {
  // private url = 'http://localhost:8000/';
  private url = 'http://140.116.247.180:8081/';
  constructor(private http: HttpClient) { }

  feedbackPost(value: FeedbackPost) {
    return this.http.post(this.url + 'feedback/', value);
  }

}
