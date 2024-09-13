import { Component, inject } from '@angular/core';
import { AsyncPipe } from '@angular/common';

import {  RouterLink, RouterOutlet } from '@angular/router';

@Component({
  selector: 'app-main-nav',
  templateUrl: './main-nav.component.html',
  styleUrl: './main-nav.component.css',
  standalone: true,
  imports: [
    AsyncPipe,
    RouterOutlet,
    RouterLink
  ]
})
export class MainNavComponent {
  isSidenavOpen = false;

  toggleSidenav() {
    this.isSidenavOpen = !this.isSidenavOpen;
  }
}
