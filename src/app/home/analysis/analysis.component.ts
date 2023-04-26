import { Component, NgZone, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import * as OpenSeadragon from 'openseadragon';

@Component({
  selector: 'app-analysis',
  templateUrl: './analysis.component.html',
  styleUrls: ['./analysis.component.css']
})
export class AnalysisComponent implements OnInit {

  constructor(private route: ActivatedRoute, private router: Router, private ngZone: NgZone) { }

  ngOnInit(): void {
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
  }
  next() {
    this.router.navigate(['..'], {
      relativeTo: this.route,
      queryParams: {
        id: 1
      }
    });
  }
}
