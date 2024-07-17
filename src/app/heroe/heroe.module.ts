import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { HeroeRoutingModule } from './heroe-routing.module';
import { LayoutPageComponent } from './pages/layout-page/layout-page.component';
import { HeroPageComponent } from './pages/hero-page/hero-page.component';
import { ListPageComponent } from './pages/list-page/list-page.component';
import { AddPageComponent } from './pages/add-page/add-page.component';
import { SearchPageComponent } from './pages/search-page/search-page.component';
import { EditPageComponent } from './pages/edit-page/edit-page.component';


@NgModule({
  declarations: [
    LayoutPageComponent,
    HeroPageComponent,
    ListPageComponent,
    AddPageComponent,
    SearchPageComponent,
    EditPageComponent
  ],
  imports: [
    CommonModule,
    HeroeRoutingModule
  ]
})
export class HeroeModule { }
