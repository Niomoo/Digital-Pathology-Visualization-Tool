import { Component, OnInit } from '@angular/core';
import { ProjectListService } from '../../../@services/project-list.service';
import { Project, ProjectArray } from '../../../@models/project-list.model';

@Component({
  selector: 'app-project-list',
  templateUrl: './project-list.component.html',
  styleUrls: ['./project-list.component.css']
})
export class ProjectListComponent implements OnInit {

  projectData: ProjectArray = [];
  project: Project|null = null;

  constructor(private ProjectListService: ProjectListService) {}

  ngOnInit() : void {
    this.getProjectList();
  }

  getProjectList() {
    this.ProjectListService.getProject().subscribe({
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
