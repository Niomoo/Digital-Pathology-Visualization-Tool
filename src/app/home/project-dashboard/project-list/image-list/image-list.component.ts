import { Component, Input, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { RecordService } from './../../../../@services/record.service';
import { ProjectAPIService } from './../../../../@services/project-api.service';
import { Image, ImageArray } from './../../../../@models/image.model';
import { Project } from './../../../../@models/project.model';
import { ImageService } from './../../../../@services/image.service';

@Component({
  selector: 'app-image-list',
  templateUrl: './image-list.component.html',
})
export class ImageListComponent {
  imageData: ImageArray = [];
  image: Image | null = null;
  subscription: any;

  constructor(
    private recordService: RecordService,
    private route: ActivatedRoute,
    private router: Router,
    private projectAPIService: ProjectAPIService,
    private imageService: ImageService
  ) {
    this.subscription = this.recordService.selectProject$.subscribe(project => {
      // console.log(project);
      this.getImageList(project);
    })
  }

  getImageList(project: Project) {
    this.imageService.getImageNames(project.title).subscribe({
      next: (data) => {
        this.imageData = data;
      },
      error: (error) => {
        this.imageData = [
          {
            // i_id: 1,
            name: 'test',
            path: '/'
          },
          {
            // i_id: 2,
            name: 'test2',
            path: '/'
          },
          {
            // i_id: 3,
            name: 'test3',
            path: '/'
          },
          {
            // i_id: 4,
            name: 'test4',
            path: '/'
          },
          {
            // i_id: 5,
            name: 'test5',
            path: '/'
          },
          {
            // i_id: 6,
            name: 'test6',
            path: '/'
          },
        ];
      }
    })
  }

  edit(image: Image) {
    this.recordService.selectImage = image;
    this.router.navigate(['..', 'firstJudgement'], {
      relativeTo: this.route,
    });
  }
}
