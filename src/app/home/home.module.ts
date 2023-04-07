import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { HomeRoutingModule } from './home-routing.module';
import { HomeComponent } from './home.component';
import { ProjectDashboardComponent } from './project-dashboard/project-dashboard.component';
import { DataDetailComponent } from './data-detail/data-detail.component';
import { FirstJudgementComponent } from './first-judgement/first-judgement.component';
import { ProjectListComponent } from './project-dashboard/project-list/project-list.component';
import { SecondJudgementComponent } from './second-judgement/second-judgement.component';
import { UploadDatasetComponent } from './upload-dataset/upload-dataset.component';

@NgModule({
  declarations: [
    HomeComponent,
    ProjectDashboardComponent,
    ProjectListComponent,
    FirstJudgementComponent,
    SecondJudgementComponent,
    UploadDatasetComponent,
    DataDetailComponent,
  ],
  imports: [
    CommonModule,
    HomeRoutingModule
  ]
})
export class HomeModule { }
