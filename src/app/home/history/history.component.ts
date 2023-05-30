import { Component, OnInit } from '@angular/core';
import { RecordArray } from 'src/app/@models/record.model';
import { RecordService } from 'src/app/@services/record.service';
import { JudgementAPIService } from 'src/app/@services/judgement-api.service';

@Component({
  selector: 'app-history',
  templateUrl: './history.component.html',
})
export class HistoryComponent implements OnInit {

  recordData: RecordArray = [];

  constructor(
    private recordService: RecordService,
    private judgementAPIService: JudgementAPIService,
  ) { }

  ngOnInit(): void {
    this.judgementAPIService.getJudgement(this.recordService.u_id).subscribe({
      next: (data) => {
        this.recordData = data;
        console.log(this.recordData);
      }
    })
  }
}
