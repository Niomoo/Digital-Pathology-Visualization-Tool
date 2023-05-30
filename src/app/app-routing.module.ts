import { NgModule } from '@angular/core';
import { PreloadAllModules, RouterModule, Routes } from '@angular/router';

// self-defined route path
import { appPath } from './app-path.const';

const routes: Routes = [
  {
    path: appPath.home,
    loadChildren: () => import('./home/home.module').then(m => m.HomeModule)
  },
  {
    path: appPath.login,
    loadChildren: () => import('./login/login.module').then(m => m.LoginModule)
  },
  {
    path: appPath.register,
    loadChildren: () => import ('./register/register.module').then(m => m.RegisterModule)
  },
  {
    path: '',
    redirectTo: appPath.login,
    pathMatch: 'full'
  },
  {
    path: '**',
    redirectTo: appPath.login,
    pathMatch: 'full'
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes, {
    preloadingStrategy: PreloadAllModules
  })],
  exports: [RouterModule]
})
export class AppRoutingModule { }
