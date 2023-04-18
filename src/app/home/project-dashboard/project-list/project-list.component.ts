import { Component, OnInit } from '@angular/core';
import { ProjectListService } from '../../../@services/project-list.service';
import { Project, ProjectArray } from '../../../@models/project-list.model';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-project-list',
  templateUrl: './project-list.component.html',
  styleUrls: ['./project-list.component.css']
})
export class ProjectListComponent implements OnInit {

  mail = '';
  projectData: ProjectArray = [];
  project: Project|null = null;

  constructor(private route: ActivatedRoute, private ProjectListService: ProjectListService) {}

  ngOnInit() : void {
    this.route.queryParams.subscribe(params => {
      this.mail = params['mail'];
    });
    this.getProjectList();
  }

  getProjectList() {
    this.ProjectListService.getProject(this.mail).subscribe({
      next: (data) => {
        this.projectData = data;
      },
      error: (error) => {
        this.projectData = [
          {
            'title': 'BRCA',
            'type': 'WSI images',
            'path': '/'
          },
          {
            'title': 'LUAD',
            'type': 'WSI images',
            'path': '/'
          },
          {
            'title': 'KIRC',
            'type': 'WSI images',
            'path': '/'
          },
          {
            'title': 'UCEC',
            'type': 'WSI images',
            'path': '/'
          },
          {
            'title': 'GBM',
            'type': 'WSI images',
            'path': '/'
          },
          {
            'title': 'HNSC',
            'type': 'WSI images',
            'path': '/'
          },
        ];
        console.log(error);
      }
    })
  }
  test() {
    console.log(this.project);
  }
}
