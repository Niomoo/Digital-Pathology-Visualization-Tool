import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { ProjectDashboardComponent } from './project-dashboard/project-dashboard.component';
import { ProjectListComponent } from './ProjectDashboard/project-list/project-list.component';
import { FirstJudgementComponent } from './first-judgement/first-judgement.component';
import { SecondJudgementComponent } from './second-judgement/second-judgement.component';

@NgModule({
  declarations: [
    AppComponent,
    ProjectDashboardComponent,
    ProjectListComponent,
    FirstJudgementComponent,
    SecondJudgementComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
