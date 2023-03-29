import { NgModule } from '@angular/core';
import { PreloadAllModules, RouterModule, Routes } from '@angular/router';

// self-defined route path
import { appPath } from './app-path.const';

const routes: Routes = [
  {
    path: appPath.projectDashboard,
    loadChildren: () => import('./project-dashboard/project-dashboard.module').then(m => m.ProjectDashboardModule)
  },
  {
    path: appPath.firstJudgement,
    loadChildren: () => import('./first-judgement/first-judgement.module').then(m => m.FirstJudgementModule)
  },
  {
    path: appPath.secondJudgement,
    loadChildren: () => import('./second-judgement/second-judgement.module').then(m => m.SecondJudgementModule)
  },
  {
    path: appPath.analysis,
    loadChildren: () => import('./analysis/analysis.module').then(m => m.AnalysisModule)
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes, {
    preloadingStrategy: PreloadAllModules
  })],
  exports: [RouterModule]
})
export class AppRoutingModule { }
