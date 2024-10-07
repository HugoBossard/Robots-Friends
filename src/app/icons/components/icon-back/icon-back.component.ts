import { Component } from '@angular/core';
import { faArrowLeft } from '@fortawesome/free-solid-svg-icons';

@Component({
  selector: 'app-icon-back',
  templateUrl: './icon-back.component.html',
  styleUrl: './icon-back.component.scss'
})
export class IconBackComponent {
  iconBack = faArrowLeft;
}