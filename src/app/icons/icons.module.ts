import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';
import { IconBackComponent } from './components/icon-back/icon-back.component';
import { IconFavoriteComponent } from './components/icon-favorite/icon-favorite.component';
import { IconHomeComponent } from './components/icon-home/icon-home.component';
import { IconUnfavoriteComponent } from './components/icon-unfavorite/icon-unfavorite.component';
import { IconSearchComponent } from './components/icon-search/icon-search.component';



@NgModule({
  declarations: [
    IconHomeComponent,IconFavoriteComponent, IconBackComponent, IconUnfavoriteComponent, IconSearchComponent],
  imports: [
    CommonModule, FontAwesomeModule
  ],
  exports: [
    IconHomeComponent,
    IconFavoriteComponent,
    IconBackComponent,
    IconUnfavoriteComponent,
    IconSearchComponent
  ]
})
export class IconsModule { }
