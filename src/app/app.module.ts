import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { HttpClientModule } from '@angular/common/http';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { ProjectDashboardComponent } from './project-dashboard/project-dashboard.component';
import { ProjectListComponent } from './project-dashboard/project-list/project-list.component';
import { FirstJudgementComponent } from './first-judgement/first-judgement.component';
import { SecondJudgementComponent } from './second-judgement/second-judgement.component';
import { UploadDatasetComponent } from './upload-dataset/upload-dataset.component';
import { DataDetailComponent } from './data-detail/data-detail.component';
import { LoginComponent } from './login/login.component';
import { HomeComponent } from './home/home.component';

@NgModule({
  declarations: [
    AppComponent,
    ProjectDashboardComponent,
    ProjectListComponent,
    FirstJudgementComponent,
    SecondJudgementComponent,
    UploadDatasetComponent,
    DataDetailComponent,
    LoginComponent,
    HomeComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
