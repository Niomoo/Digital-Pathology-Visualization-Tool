import { Component, OnInit } from '@angular/core';
import { ProjectAPIService } from 'src/app/@services/project-api.service';
import { RecordService } from 'src/app/@services/record.service';
import { Project, ProjectArray } from 'src/app/@models/project.model';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-project-list',
  templateUrl: './project-list.component.html',
})
export class ProjectListComponent implements OnInit {
  id = 0;
  projectData: ProjectArray = [];
  selectedProject: Project | null = null;
  display: Boolean = false;

  constructor(
    private recordService: RecordService,
    private route: ActivatedRoute,
  ) {}

  ngOnInit(): void {
    this.route.queryParams.subscribe((params) => {
      this.id = params['id'];
      if (this.id == undefined) {
        this.id = 1;
      }
    });
    this.getProjectList();
  }

  getProjectList() {
    this.projectData = [
      {
        p_id: 1,
        title: 'Breast',
      },
      {
        p_id: 2,
        title: 'Lung',
      },
      // {
      //   p_id: 3,
      //   title: 'Kidney',
      // },
      {
        p_id: 4,
        title: 'Brain',
      },
      // {
      //   p_id: 5,
      //   title: 'Colon',
      // },
      // {
      //   p_id: 6,
      //   title: 'Skin',
      // },
    ];
  }

  showImages(project: Project) {
    this.recordService.updateProject(project);
    this.selectedProject = project;
    this.display = true;
  }

}
