import { Component, OnInit } from '@angular/core';
import { ProjectAPIService } from 'src/app/@services/project-api.service';
import { ProjectListService } from 'src/app/@services/project-list.service';
import { Project, ProjectArray } from 'src/app/@models/project-list.model';
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

  constructor(private projectListService: ProjectListService,
    private route: ActivatedRoute,
    private router: Router,
    private projectAPIService: ProjectAPIService) {}

  ngOnInit() : void {
    this.route.queryParams.subscribe(params => {
      this.id = params['id'];
      if(this.id == undefined) {
        this.id = 1;
      }
    });
    this.getProjectList();
  }

  getProjectList() {
    this.projectAPIService.getProject(this.id).subscribe({
      next: (data) => {
        this.projectData = data;
      },
      error: (error) => {
        this.projectData = [
          {
            'p_id': 1,
            'title': 'Breast',
            'type': 'WSI images',
            'path': '/'
          },
          {
            'p_id': 2,
            'title': 'Lung',
            'type': 'WSI images',
            'path': '/'
          },
          {
            'p_id': 3,
            'title': 'Kidney',
            'type': 'WSI images',
            'path': '/'
          },
          {
            'p_id': 4,
            'title': 'Brain',
            'type': 'WSI images',
            'path': '/'
          },
          {
            'p_id': 5,
            'title': 'Colon',
            'type': 'WSI images',
            'path': '/'
          },
          {
            'p_id': 6,
            'title': 'Skin',
            'type': 'WSI images',
            'path': '/'
          },
        ];
        console.log(error);
      }
    })
  }
  edit(project: Project) {

    this.projectListService.selectProject = project;

    this.router.navigate(['..', 'firstJudgement'], {
      relativeTo: this.route,
      queryParams: {
        pid: project.p_id
      }
    })
  }
}
