import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { FeedbackPost } from '../@models/feedback.model';
import { environment } from 'src/environments/environment';

@Injectable({
  providedIn: 'root'
})
export class FeedbackService {
  
  constructor(private http: HttpClient) { }

  feedbackPost(value: FeedbackPost) {
    return this.http.post(`${environment.baseUrl}` + 'feedback/', value);
  }

}
