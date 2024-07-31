import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import {LayoutPageComponent} from "./pages/layout-page/layout-page.component";
import {RegisterPageComponent} from "./pages/register-page/register-page.component";

const routes: Routes = [
  {
    path:'',
    component: LayoutPageComponent,
    children: [
      {
        path: 'create', component: RegisterPageComponent
      }
      ]
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class RegisterRoutingModule { }
