import { ProjectDashboardComponent } from './project-dashboard.component';
import { ProjectListComponent } from './project-list/project-list.component';
import { ImageListComponent } from './image-list/image-list.component';
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  {
    path: '',
    component: ProjectDashboardComponent,
    children: [
      {
        path: ':id',
        component: ProjectListComponent,
      },
    ],
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class ProjectDashboardRoutingModule { }
