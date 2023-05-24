import { Component, NgZone, OnInit } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import * as OpenSeadragon from 'openseadragon';
import { interval } from 'rxjs';
import { RecordService } from './../../@services/record.service';
import { ImageAPIService } from './../../@services/image-api.service';
import * as JSZip from 'jszip';
import { JSZipObject } from 'jszip';

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
  dziPath: string = "";
  title: string = "";

  constructor(
    private recordService: RecordService,
    private imageAPIService: ImageAPIService,
    private route: ActivatedRoute,
    private router: Router,
    private ngZone: NgZone,
    private fb: FormBuilder) {
      this.subscription = this.recordService.selectProject$.subscribe(project => {
        this.title = project.title;
      });
     }


  ngOnInit(): void {

    // this.route.queryParams.subscribe(params => {
    //   console.log(params);
    //   this.title = params['project'];
    // })

    this.judgeForm = this.fb.group({
      judge: [null]
    });

    this.dziPath = this.recordService.selectImage.path;
    // this.imageAPIService.getImage(this.recordService.selectImage).subscribe(arrayBuffer => {
    //   this.loadDziData(arrayBuffer);
    // });
    // const dziPath: string = 'assets/' + this.title + '/' + this.recordService.selectImage.name + '.svs.dzi';
    // const dziFiles: string = this.title + '/' + this.recordService.selectImage.name + '.svs_files';
    // console.log(dziPath, dziFiles);
    const viewer = this.ngZone.runOutsideAngular(() =>
      OpenSeadragon({
        id: 'openseadragon1',
        prefixUrl:
          'https://cdn.jsdelivr.net/npm/openseadragon@2.3/build/openseadragon/images/',
        tileSources: 'http://140.116.247.180:8081/dzi/' + this.dziPath,
      })
    );
    // this.dziFile = dziPath;
    // const config = {
    //   id: 'openseadragon1',
    //   prefixUrl: 'https://cdn.jsdelivr.net/npm/openseadragon@2.3/build/openseadragon/images/',
    //   tileSources: this.dziFile
    // }
    // this.viewer = new OpenSeadragon.Viewer(config);

    const startTime = new Date();
    interval(1000).subscribe(()=> {
      const currentTime = new Date();
      const timeDiff = currentTime.getTime() - startTime.getTime();
      this.counterString = this.recordService.formatTime(timeDiff);
    });
  }

  // async loadDziData(arrayBuffer: ArrayBuffer) {
  //   console.log(arrayBuffer);
  //   const zip = new JSZip();
  //   const zipPromise = zip.loadAsync(arrayBuffer);
  //   let zipFile: any;
  //   zipPromise.then(zip => zipFile = zip).catch(() => zipFile = null);

  //   if(zipFile !== null) {
  //     const dziData = await zipFile.file(this.recordService.selectImage.name + '.svs.dzi').async('arraybuffer');
  //     console.log(dziData);
  //     const imageData: {[key: string]: Promise<ArrayBuffer> } = {};
  //     zipFile.file(/.*/).forEach((file: JSZipObject) => {
  //       imageData[file.name] = file.async('arraybuffer');
  //     })
  //     const config = {
  //       id: 'openseadragon1',
  //       prefixUrl: 'https://cdn.jsdelivr.net/npm/openseadragon@2.3/build/openseadragon/images/',
  //       tileSources: dziData,
  //       imageLoader: imageData
  //     }
  //     this.viewer = new OpenSeadragon.Viewer(config);
  //   }
  // }

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
