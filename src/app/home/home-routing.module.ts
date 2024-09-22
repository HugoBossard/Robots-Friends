import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { PageInfoRobotsComponent } from './pages/page-info-robots/page-info-robots.component';
import { PageListRobotsComponent } from './pages/page-list-robots/page-list-robots.component';

const routes: Routes = [
  { path: '', component: PageListRobotsComponent },
  { path: '/robots/:id', component: PageInfoRobotsComponent }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class HomeRoutingModule { }
