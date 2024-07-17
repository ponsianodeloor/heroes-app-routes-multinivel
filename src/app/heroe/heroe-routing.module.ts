import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import {LayoutPageComponent} from "./pages/layout-page/layout-page.component";
import {AddPageComponent} from "./pages/add-page/add-page.component";
import {EditPageComponent} from "./pages/edit-page/edit-page.component";
import {SearchPageComponent} from "./pages/search-page/search-page.component";
import {ListPageComponent} from "./pages/list-page/list-page.component";
import {HeroPageComponent} from "./pages/hero-page/hero-page.component";

const routes: Routes = [
  {
    path: '',
    component: LayoutPageComponent,
    children: [
      {path: 'list-hero', component: ListPageComponent},
      { path: 'add-hero', component: AddPageComponent },
      { path: 'edit-hero/:id', component: EditPageComponent },
      { path: 'search-hero/:name', component: SearchPageComponent },
      { path: ':id', component: HeroPageComponent },
      { path: '**', redirectTo: 'list-hero' }
    ]
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class HeroeRoutingModule { }
