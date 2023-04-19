import { Component, NgZone, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import * as OpenSeadragon from 'openseadragon';
import { Project } from '../../@models/project-list.model';

@Component({
  selector: 'app-first-judgement',
  templateUrl: './first-judgement.component.html',
  styleUrls: ['./first-judgement.component.css']
})
export class FirstJudgementComponent implements OnInit{

  project: Project|null = null;

  constructor(private route: ActivatedRoute, private ngZone: NgZone) { }

  ngOnInit(): void {

    this.route.queryParams.subscribe(params => {
      console.log(params);
    })
    const viewer = this.ngZone.runOutsideAngular(() =>
      OpenSeadragon({
        id: "openseadragon1",
        prefixUrl: "https://cdn.jsdelivr.net/npm/openseadragon@2.3/build/openseadragon/images/",
        tileSources: {
          Image: {
            xmlns: "http://schemas.microsoft.com/deepzoom/2008",
            Url: "/assets/svs/TCGA-05-4245-01A-01-TS1.bf71c76b-e802-4a7a-b6c3-c5f46212fab0_files/",
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
  }
}
