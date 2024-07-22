import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ReactiveFormsModule } from "@angular/forms";
import { HeroeRoutingModule } from './heroe-routing.module';
import { MaterialModule } from "../material/material.module";
import { SharedModule } from "../shared/shared.module";

import { HeroImagePipe } from './pipes/hero-image.pipe';

import { LayoutPageComponent } from './pages/layout-page/layout-page.component';
import { AddPageComponent } from './pages/add-page/add-page.component';
import { HeroPageComponent } from './pages/hero-page/hero-page.component';
import { ListPageComponent } from './pages/list-page/list-page.component';
import { SearchPageComponent } from './pages/search-page/search-page.component';
import { EditPageComponent } from './pages/edit-page/edit-page.component';
import { HeroCardComponent } from './components/hero-card/hero-card.component';


@NgModule({
  declarations: [
    LayoutPageComponent,
    HeroPageComponent,
    ListPageComponent,
    AddPageComponent,
    SearchPageComponent,
    EditPageComponent,
    HeroCardComponent,
    HeroImagePipe
  ],
  imports: [
    CommonModule,
    HeroeRoutingModule,
    MaterialModule,
    ReactiveFormsModule,
    SharedModule
  ]
})
export class HeroeModule { }
