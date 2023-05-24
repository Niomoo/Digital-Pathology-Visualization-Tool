import { Component, NgZone, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import * as OpenSeadragon from 'openseadragon';
import { RecordService } from 'src/app/@services/record.service';
import { ImageAPIService } from 'src/app/@services/image-api.service';

@Component({
  selector: 'app-analysis',
  templateUrl: './analysis.component.html',
})
export class AnalysisComponent implements OnInit {
  constructor(
    private recordService: RecordService,
    private imageAPIService: ImageAPIService,
    private route: ActivatedRoute,
    private router: Router,
    private ngZone: NgZone
  ) {}

  get title() {
    return this.recordService.selectProject$.subscribe();
  }

  get firstJudge() {
    return this.recordService.firstJudge;
  }

  get secondJudge() {
    return this.recordService.secondJudge;
  }

  get firstDuration() {
    return this.recordService.firstDuration;
  }

  get secondDuration() {
    return this.recordService.secondDuration;
  }

  ngOnInit(): void {
    const viewer = this.ngZone.runOutsideAngular(() =>
      OpenSeadragon({
        id: 'openseadragon1',
        prefixUrl:
          'https://cdn.jsdelivr.net/npm/openseadragon@2.3/build/openseadragon/images/',
        tileSources: this.imageAPIService.getImagePath(this.recordService.selectImage),
      })
    );
  }
  next() {
    this.router.navigate(['..'], {
      relativeTo: this.route,
      queryParams: {
        id: 1,
      },
    });
  }
}
