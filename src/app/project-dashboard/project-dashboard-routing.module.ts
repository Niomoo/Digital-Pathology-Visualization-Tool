import { ProjectDashboardComponent } from './project-dashboard.component';
import { ProjectListComponent } from '../ProjectDashboard/project-list/project-list.component';
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  {
    path: '',
    component: ProjectDashboardComponent,
    children: [
      {
        path: ':type',
        component: ProjectListComponent
      },
    ]
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class ProjectDashboardRoutingModule { }
