import { Component, OnInit } from '@angular/core';
import { ProjectListService } from '../../../@services/project-list.service';
import { Project, ProjectArray } from './project-list';

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
          },
          {
            'title': 'LUAD',
            'type': 'WSI images',
          },
          {
            'title': 'KIRC',
            'type': 'WSI images',
          },
          {
            'title': 'UCEC',
            'type': 'WSI images',
          },
          {
            'title': 'GBM',
            'type': 'WSI images',
          },
          {
            'title': 'HNSC',
            'type': 'WSI images',
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
