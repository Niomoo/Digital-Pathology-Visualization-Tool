import { Component, NgZone, OnInit } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import * as OpenSeadragon from 'openseadragon';
import { Project } from 'src/app/@models/project-list.model';
import { ProjectListService } from 'src/app/@services/project-list.service';

@Component({
  selector: 'app-second-judgement',
  templateUrl: './second-judgement.component.html',
  styleUrls: ['./second-judgement.component.css']
})
export class SecondJudgementComponent implements OnInit{

  judgeForm!: FormGroup;
  judges = [
    { id: 1, name: 'LUAD'},
    { id: 2, name: 'LUSC'},
    { id: 3, name: 'None of the above'}
  ];

  constructor(private projectListService: ProjectListService,
    private route: ActivatedRoute,
    private router: Router,
    private ngZone: NgZone,
    private fb: FormBuilder) { }

  get title() {
    return this.projectListService.selectProject.title;
  }

  get counterString() {
    return this.projectListService.counterString;
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
        id: "openseadragon1",
        prefixUrl: "https://cdn.jsdelivr.net/npm/openseadragon@2.3/build/openseadragon/images/",
        tileSources: {
          Image: {
            xmlns: "http://schemas.microsoft.com/deepzoom/2008",
            Url: "/assets/svs/TCGA-BRCA_files/",
            Overlap: "1",
            TileSize: "254",
            Format: "jpeg",
            Size: {
              Height: "13527",
              Width: "14000"
            }

          }
        }
      })
    );
    const viewer2 = this.ngZone.runOutsideAngular(() =>
      OpenSeadragon({
        id: "openseadragon2",
        prefixUrl: "https://cdn.jsdelivr.net/npm/openseadragon@2.3/build/openseadragon/images/",
        tileSources: {
          Image: {
            xmlns: "http://schemas.microsoft.com/deepzoom/2008",
            Url: "/assets/svs/TCGA-BRCA_files/",
            Overlap: "1",
            TileSize: "254",
            Format: "jpeg",
            Size: {
              Height: "13527",
              Width: "14000"
            }

          }
        }
      })
    );

    viewer.addHandler("zoom", function(event) {
      console.log(event);
      viewer2.viewport.zoomTo(event.zoom, event.refPoint, event.immediately);
    })

    this.projectListService.startTimer();

  }

  back() {
    this.projectListService.stopTimer(1);
    this.router.navigate(['..', 'firstJudgement'], {
      relativeTo: this.route,
    });
  }

  next() {
    this.projectListService.stopTimer(1);
    this.projectListService.secondJudge = this.judgeForm.value.judge;

    this.router.navigate(['..', 'analysis'], {
      relativeTo: this.route,
    });
  }
}
