import { Component, OnInit } from '@angular/core';
import { ProjectListService } from '../../../@services/project-list.service';
import { Project, ProjectArray } from '../../../@models/project-list.model';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-project-list',
  templateUrl: './project-list.component.html',
  styleUrls: ['./project-list.component.css']
})
export class ProjectListComponent implements OnInit {

  id = 0;
  projectData: ProjectArray = [];
  project: Project|null = null;

  constructor(private route: ActivatedRoute, private router: Router, private ProjectListService: ProjectListService) {}

  ngOnInit() : void {
    this.route.queryParams.subscribe(params => {
      this.id = params['id'];
    });
    this.getProjectList();
  }

  getProjectList() {
    this.ProjectListService.getProject(this.id).subscribe({
      next: (data) => {
        this.projectData = data;
      },
      error: (error) => {
        this.projectData = [
          {
            'p_id': 1,
            'title': 'BRCA',
            'type': 'WSI images',
            'path': '/'
          },
          {
            'p_id': 2,
            'title': 'LUAD',
            'type': 'WSI images',
            'path': '/'
          },
          {
            'p_id': 3,
            'title': 'KIRC',
            'type': 'WSI images',
            'path': '/'
          },
          {
            'p_id': 4,
            'title': 'UCEC',
            'type': 'WSI images',
            'path': '/'
          },
          {
            'p_id': 5,
            'title': 'GBM',
            'type': 'WSI images',
            'path': '/'
          },
          {
            'p_id': 6,
            'title': 'HNSC',
            'type': 'WSI images',
            'path': '/'
          },
        ];
        console.log(error);
      }
    })
  }
  edit(project: Project) {
    console.log(project);
    this.router.navigate(['..', 'firstJudgement'], {
      relativeTo: this.route,
      queryParams: {
        pid: project.p_id
      }
    })
  }
}
