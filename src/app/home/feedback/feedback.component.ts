import { Component, ViewChild } from '@angular/core';
import { FeedbackPost } from '../../@models/feedback.model';
import { FeedbackService } from 'src/app/@services/feedback.service';


@Component({
  selector: 'app-feedback',
  templateUrl: './feedback.component.html',
})

export class FeedbackComponent {

  feedbackValue: FeedbackPost = {
    firstName: '',
    lastName: '',
    email: '',
    message: ''
  };
  constructor(
    private feedbackService: FeedbackService,
  ) {
  }

  sendFeedback() {
    if(this.feedbackValue.firstName != '' && this.feedbackValue.lastName != '' && this.feedbackValue.email != '' && this.feedbackValue.message != '') {
      this.feedbackService.feedbackPost(this.feedbackValue).subscribe((data: any) => {
        if(data.status == 201) {
          alert('Sent Successfully!');
          this.feedbackValue = {
            firstName: '',
            lastName: '',
            email: '',
            message: ''
          };
        }
      })
    } else {
      alert('Please fill in the blank!');
    }
  }
}
