import { Component, NgZone, OnInit } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import * as OpenSeadragon from 'openseadragon';
import { interval } from 'rxjs';
import { RecordService } from 'src/app/@services/record.service';

@Component({
  selector: 'app-first-judgement',
  templateUrl: './first-judgement.component.html',
})
export class FirstJudgementComponent implements OnInit{

  judgeForm!: FormGroup;
  judges = [
    { id: 1, name: 'LUAD'},
    { id: 2, name: 'LUSC'},
    { id: 3, name: 'None of the above'}
  ];
  counterString = '00:00:00';
  subscription: any;

  constructor(
    private recordService: RecordService,
    private route: ActivatedRoute,
    private router: Router,
    private ngZone: NgZone,
    private fb: FormBuilder) {
      this.subscription = this.recordService.selectProject$.subscribe();
     }

  get title() {
    return this.subscription.title;
  }

  ngOnInit(): void {

    this.route.queryParams.subscribe(params => {
      console.log(params);
    })

    this.judgeForm = this.fb.group({
      judge: [null]
    });

    const viewer = this.ngZone.runOutsideAngular(() =>
      OpenSeadragon({
        id: 'openseadragon1',
        prefixUrl:
          'https://cdn.jsdelivr.net/npm/openseadragon@2.3/build/openseadragon/images/',
        tileSources: '/assets/svs/TCGA-BRCA.dzi',
      })
    );

    const startTime = new Date();
    interval(1000).subscribe(()=> {
      const currentTime = new Date();
      const timeDiff = currentTime.getTime() - startTime.getTime();
      this.counterString = this.recordService.formatTime(timeDiff);
    });
  }

  back() {
    this.counterString = '00:00:00';
    this.router.navigate(['..'], {
      relativeTo: this.route,
    });
  }

  next() {
    this.recordService.firstDuration = this.counterString;
    this.recordService.firstJudge = this.judgeForm.value.judge;

    this.router.navigate(['..', 'secondJudgement'], {
      relativeTo: this.route,
    });
  }
}
