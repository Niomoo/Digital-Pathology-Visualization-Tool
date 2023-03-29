import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ProjectDashboardRoutingModule } from './project-dashboard-routing.module';
import { ProjectListComponent } from '../ProjectDashboard/project-list/project-list.component';

@NgModule({
  declarations: [ProjectListComponent],
  imports: [
    CommonModule,
    ProjectDashboardRoutingModule
  ]
})
export class ProjectDashboardModule { }
