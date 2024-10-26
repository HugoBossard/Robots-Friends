import { Component } from '@angular/core';
import { faSearch } from '@fortawesome/free-solid-svg-icons';

@Component({
  selector: 'app-icon-search',
  templateUrl: './icon-search.component.html',
  styleUrl: './icon-search.component.scss'
})
export class IconSearchComponent {
  iconSearch = faSearch;
}