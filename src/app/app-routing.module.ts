import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import {ErrorNotFoundPageComponent} from "./shared/pages/error-not-found-page/error-not-found-page.component";

const routes: Routes = [
  {
    path: 'auth',
    loadChildren: () => import('./auth/auth.module').then(m => m.AuthModule)
  },
  {
    path: 'heroe',
    loadChildren: () => import('./heroe/heroe.module').then(m => m.HeroeModule)
  },
  {
    path: '404',
    component: ErrorNotFoundPageComponent
  },
  {
    path: '',
    redirectTo: 'heroe',
    pathMatch: 'full'
  },
  {
    path: '**',
    redirectTo: '404'
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
