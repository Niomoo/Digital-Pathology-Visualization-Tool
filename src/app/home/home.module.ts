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
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { HistoryComponent } from './history/history.component';
import { AnalysisComponent } from './analysis/analysis.component';
import { StatisticsComponent } from './statistics/statistics.component';
import { NgApexchartsModule } from 'ng-apexcharts';
import { ImageListComponent } from './project-dashboard/project-list/image-list/image-list.component';

@NgModule({
  declarations: [
    HomeComponent,
    ProjectDashboardComponent,
    ProjectListComponent,
    ImageListComponent,
    FirstJudgementComponent,
    SecondJudgementComponent,
    UploadDatasetComponent,
    DataDetailComponent,
    AnalysisComponent,
    HistoryComponent,
    StatisticsComponent
  ],
  imports: [
    CommonModule,
    HomeRoutingModule,
    FormsModule,
    ReactiveFormsModule,
    NgApexchartsModule
  ]
})
export class HomeModule { }
