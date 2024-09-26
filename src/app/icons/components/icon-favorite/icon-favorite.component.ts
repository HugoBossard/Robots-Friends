import { Component } from '@angular/core';
import { faHeart } from '@fortawesome/free-solid-svg-icons';

@Component({
  selector: 'app-icon-favorite',
  templateUrl: './icon-favorite.component.html',
  styleUrl: './icon-favorite.component.scss'
})
export class IconFavoriteComponent {
  iconHeart = faHeart;
}