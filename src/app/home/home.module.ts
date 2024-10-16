import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';

import { CoreModule } from "../core/core.module";
import { PageListFavoritesRobotsComponent } from '../favorites/pages/page-list-favorites-robots/page-list-favorites-robots.component';
import { IconsModule } from "../icons/icons.module";
import { SharedModule } from '../shared/shared.module';
import { DetailFrameComponent } from './components/detail-frame/detail-frame.component';
import { HomeRoutingModule } from './home-routing.module';
import { PageInfoRobotsComponent } from './pages/page-info-robots/page-info-robots.component';
import { PageListRobotsComponent } from './pages/page-list-robots/page-list-robots.component';


@NgModule({
  imports: [CommonModule, HomeRoutingModule,SharedModule, CoreModule,IconsModule],
  declarations: [PageListRobotsComponent, PageInfoRobotsComponent, DetailFrameComponent, PageListFavoritesRobotsComponent],
  exports: [
    PageListFavoritesRobotsComponent
  ]
})
export class HomeModule { }