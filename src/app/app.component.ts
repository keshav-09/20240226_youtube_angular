import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { NavbarComponent } from './navbar/navbar.component';
import { Router } from '@angular/router';
import { ChipsComponent } from './chips/chips.component';
// import { NgModule } from '@angular/core';

import { SidebarComponent } from './sidebar/sidebar.component';
import {MatMenuModule,} from '@angular/material/menu';
import {MatButtonModule} from '@angular/material/button';
import { MainContentComponent } from './main-content/main-content.component';
import { SubscriptionsContentComponent } from './subscriptions-content/subscriptions-content.component';
 
  

@Component({
  imports: [
    ChipsComponent,
    SubscriptionsContentComponent,
    SidebarComponent,
    RouterOutlet,
    NavbarComponent,
    SidebarComponent,
    MatMenuModule,
    MatButtonModule,
    MainContentComponent],
  selector: 'app-root',
  standalone: true,
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  title = 'youtube_angular';
}
