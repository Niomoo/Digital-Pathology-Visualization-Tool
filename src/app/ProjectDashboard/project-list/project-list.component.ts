import { Component, OnInit } from '@angular/core';
import { ProjectListService } from './project-list.service';
import { Project, ProjectArray } from './project-list';

@Component({
  selector: 'app-project-list',
  templateUrl: './project-list.component.html',
  styleUrls: ['./project-list.component.css']
})
export class ProjectListComponent implements OnInit {

  projectData: ProjectArray = [];
  project: Project|null = null;

  constructor(private projectListService: ProjectListService) {}

  ngOnInit() : void {
    this.getProjectList();
  }

  getProjectList() {
    this.projectListService.getProject().subscribe({
      next: (data) => {
        this.projectData = data;
      },
      error: (error) => {
        console.log(error);
      }
    })
  }
}
