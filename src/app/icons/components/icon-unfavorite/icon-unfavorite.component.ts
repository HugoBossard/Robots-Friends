import { Component } from '@angular/core';
import { faHeartCrack } from '@fortawesome/free-solid-svg-icons';

@Component({
  selector: 'app-icon-unfavorite',
  templateUrl: './icon-unfavorite.component.html',
  styleUrl: './icon-unfavorite.component.scss'
})
export class IconUnfavoriteComponent {
  iconUnfavorite = faHeartCrack;
}