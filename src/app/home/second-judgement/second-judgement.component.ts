import { Component, NgZone, OnInit } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import * as OpenSeadragon from 'openseadragon';
import { interval } from 'rxjs';
import { RecordService } from 'src/app/@services/record.service';
import { ImageAPIService } from 'src/app/@services/image-api.service';
import { Organ } from '../../@models/organ.const';

@Component({
  selector: 'app-second-judgement',
  templateUrl: './second-judgement.component.html',
})
export class SecondJudgementComponent implements OnInit {
  judgeForm!: FormGroup;
  judges = [{ id: 1, name: 'test'}];

  counterString = '00:00:00';
  subscription: any;
  title: string = "";

  constructor(
    private recordService: RecordService,
    private imageAPIService: ImageAPIService,
    private route: ActivatedRoute,
    private router: Router,
    private ngZone: NgZone,
    private fb: FormBuilder
  ) {
    this.subscription = this.recordService.selectProject$.subscribe(project => {
      this.title = project.title;
    });
  }

  ngOnInit(): void {

    this.route.queryParams.subscribe((params) => {
      console.log(params);
    });

    this.judgeForm = this.fb.group({
      judge: [null],
    });

    switch(this.title) {
      case "Breast":
        this.judges = Organ[this.title];
        break;
      case "Lung":
        this.judges = Organ[this.title];
        break;
      case "Brain":
        this.judges = Organ[this.title];
        break;
      default:
        this.judges = [];
        break;
    }

    const viewer = this.ngZone.runOutsideAngular(() =>
      OpenSeadragon({
        id: 'openseadragon1',
        prefixUrl:
          'https://cdn.jsdelivr.net/npm/openseadragon@2.3/build/openseadragon/images/',
        tileSources: this.imageAPIService.getImagePath(this.recordService.selectImage),
      })
    );
    const viewer2 = this.ngZone.runOutsideAngular(() =>
      OpenSeadragon({
        id: 'openseadragon2',
        prefixUrl:
          'https://cdn.jsdelivr.net/npm/openseadragon@2.3/build/openseadragon/images/',
        tileSources: this.imageAPIService.getImagePath(this.recordService.selectImage),
      })
    );

    viewer.addHandler('zoom', function (event) {
      // console.log(event);
      viewer2.viewport.zoomTo(event.zoom, event.refPoint, event.immediately);
    });

    const startTime = new Date();
    interval(1000).subscribe(() => {
      const currentTime = new Date();
      const timeDiff = currentTime.getTime() - startTime.getTime();
      this.counterString = this.recordService.formatTime(timeDiff);
    });
  }

  back() {
    this.counterString = '00:00:00';
    this.router.navigate(['..', 'firstJudgement'], {
      relativeTo: this.route,
    });
  }

  next() {
    this.recordService.secondDuration = this.counterString;
    this.recordService.secondJudge = this.judgeForm.value.judge;

    this.router.navigate(['..', 'analysis'], {
      relativeTo: this.route,
    });
  }
}
