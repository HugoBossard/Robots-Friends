import { Component } from '@angular/core';
import { faHouseChimney } from '@fortawesome/free-solid-svg-icons';

@Component({
  selector: 'app-icon-home',
  templateUrl: './icon-home.component.html',
  styleUrl: './icon-home.component.scss'
})
export class IconHomeComponent {
  iconHouseChimney = faHouseChimney;
}