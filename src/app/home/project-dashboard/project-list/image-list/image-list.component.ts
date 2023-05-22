import { Component, OnInit } from '@angular/core';
import { RecordService } from 'src/app/@services/record.service';
import { ProjectAPIService } from 'src/app/@services/project-api.service';
import { Image, ImageArray } from 'src/app/@models/image.model';
import { ActivatedRoute, Router } from '@angular/router';
import { Project } from 'src/app/@models/project.model';
import { ImageService } from 'src/app/@services/image.service';

@Component({
  selector: 'app-image-list',
  templateUrl: './image-list.component.html',
})
export class ImageListComponent implements OnInit {
  imageData: ImageArray = [];
  image: Image | null = null;
  test: any;

  constructor(
    private recordService: RecordService,
    private route: ActivatedRoute,
    private router: Router,
    private projectAPIService: ProjectAPIService,
    private imageService: ImageService
  ) {}

  ngOnInit(): void {
    this.getImageList();
  }

  getImageList() {
    this.test = this.imageService.getImageNames('brain');
    console.log(this.test);
    this.imageData = [
      {
        i_id: 1,
        name: 'test',
      },
      {
        i_id: 2,
        name: 'test2',
      },
      {
        i_id: 3,
        name: 'test3',
      },
      {
        i_id: 4,
        name: 'test4',
      },
      {
        i_id: 5,
        name: 'test5',
      },
      {
        i_id: 6,
        name: 'test6',
      },
    ];
  }

  edit(image: Image) {
    this.recordService.selectImage = image;

    this.router.navigate(['..', 'firstJudgement'], {
      relativeTo: this.route,
      queryParams: {
        iid: image.i_id,
      },
    });
  }
}
