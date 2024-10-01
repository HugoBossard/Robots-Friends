import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';

import { SharedModule } from '../shared/shared.module';
import { HomeRoutingModule } from './home-routing.module';
import { PageInfoRobotsComponent } from './pages/page-info-robots/page-info-robots.component';
import { PageListRobotsComponent } from './pages/page-list-robots/page-list-robots.component';


@NgModule({
  declarations: [PageListRobotsComponent, PageInfoRobotsComponent],
  imports: [
    CommonModule,
    HomeRoutingModule,
    SharedModule
  ]
})
export class HomeModule { }