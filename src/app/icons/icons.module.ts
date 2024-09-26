import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';
import { IconFavoriteComponent } from './components/icon-favorite/icon-favorite.component';
import { IconHomeComponent } from './components/icon-home/icon-home.component';



@NgModule({
  declarations: [
    IconHomeComponent,IconFavoriteComponent],
  imports: [
    CommonModule, FontAwesomeModule
  ],
  exports: [
    IconHomeComponent,
    IconFavoriteComponent
  ]
})
export class IconsModule { }
