import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { PageListFavoritesRobotsComponent } from './pages/page-list-favorites-robots/page-list-favorites-robots.component';

const routes: Routes = [
  { path: '', component: PageListFavoritesRobotsComponent }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class FavoritesRoutingModule { }