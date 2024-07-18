import { Injectable } from '@angular/core';
import {SidebarMenuInterface} from "../interfaces/SidebarMenu.interface";

@Injectable({
  providedIn: 'root'
})
export class SideBarMenuService {

  public sideBarMenu: SidebarMenuInterface[] = [
    {
      route: 'list-hero',
      title: 'Listado',
      icon: 'label',
      description: 'This is the dashboard'
    },
    {
      route: 'add-hero',
      title: 'Añadir',
      icon: 'add',
      description: 'This is the heroes'
    },
    {
      route: 'search-hero',
      title: 'Buscar',
      icon: 'search',
      description: 'This is the about'
    }
  ];

  constructor() { }
}
