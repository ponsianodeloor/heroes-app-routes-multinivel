import { Component } from '@angular/core';
import {MatSidenav} from "@angular/material/sidenav";
import {SideBarMenuService} from "../../../shared/services/side-bar-menu.service";
import {SidebarMenuInterface} from "../../../shared/interfaces/SidebarMenu.interface";

@Component({
  selector: 'app-layout-page',
  templateUrl: './layout-page.component.html',
  styleUrl: './layout-page.component.css'
})
export class LayoutPageComponent {

  public isButtonVisible = true;
  public sideBarMenu:SidebarMenuInterface[] = [];

  constructor(
    private sideBarMenuService: SideBarMenuService
  ) {
    this.sideBarMenu = this.sideBarMenuService.sideBarMenu
  }

  toggleSidenav(sidenav: MatSidenav) {
    this.isButtonVisible = !this.isButtonVisible;
    sidenav.toggle();
  }

  onSidenavToggle(opened: boolean) {
    this.isButtonVisible = !opened;
  }

}
