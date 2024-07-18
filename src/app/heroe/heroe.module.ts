import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { HeroeRoutingModule } from './heroe-routing.module';
import { LayoutPageComponent } from './pages/layout-page/layout-page.component';
import { HeroPageComponent } from './pages/hero-page/hero-page.component';
import { ListPageComponent } from './pages/list-page/list-page.component';
import { AddPageComponent } from './pages/add-page/add-page.component';
import { SearchPageComponent } from './pages/search-page/search-page.component';
import { EditPageComponent } from './pages/edit-page/edit-page.component';
import {MaterialModule} from "../material/material.module";
import {SharedModule} from "../shared/shared.module";
import { HeroCardComponent } from './components/hero-card/hero-card.component';


@NgModule({
  declarations: [
    LayoutPageComponent,
    HeroPageComponent,
    ListPageComponent,
    AddPageComponent,
    SearchPageComponent,
    EditPageComponent,
    HeroCardComponent
  ],
  imports: [
    CommonModule,
    HeroeRoutingModule,
    MaterialModule,
    SharedModule
  ]
})
export class HeroeModule { }
