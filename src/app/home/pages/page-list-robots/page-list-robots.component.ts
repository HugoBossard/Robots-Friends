import { Component, inject } from '@angular/core';
import { Router } from '@angular/router';
import { BehaviorSubject } from 'rxjs';
import { Robot } from '../../../core/models/robot';
import { RobotsService } from '../../services/robots.service';
@Component({
  selector: 'app-page-list-robots',
  templateUrl: './page-list-robots.component.html',
  styleUrl: './page-list-robots.component.scss'
})
export class PageListRobotsComponent {
  robots = new BehaviorSubject<Robot[]>([]);
  robotsCountry!: String[];

  private robotsService = inject(RobotsService);
  
  constructor(private router: Router) {}

  ngOnInit() {
    this.robotsService.collection.subscribe((robots) => {
      this.robots.next(robots);
      this.robotsCountry = robots.map((robot) => robot.country);
    });
  }

  getRobotInfo(robotId: String) {
    this.router.navigate(["home", "robots", robotId]);
  }

  toggleFavorite(robotId: String) {
    this.robotsService.toggleInFavorite(robotId);
  }

  toggleActive(countrySelected: String) {
    let filters = document.getElementsByClassName("filter");

    let countryChanged = true;

    for (let i = 0; i < filters.length; i ++) {
      let currentFilter = filters.item(i);

      if (!currentFilter?.textContent?.includes(countrySelected.toString())) {
        currentFilter?.classList.remove("active");
      }
      else {
        if (currentFilter?.classList.contains("active")) {
          currentFilter?.classList.remove("active");
          countryChanged = false;
        }
        else {
          currentFilter?.classList.add("active");
        }
      }
    }

    if(countryChanged) {
      this.applyFilter(countrySelected);
    }
    else {
      this.removeFilter();
    }
  }

  applyFilter(countrySelected: String) {
    this.robotsService.collection.subscribe((robots) => {
      this.robots.next(robots.filter((robot) => robot.country === countrySelected));
    });
  }

  removeFilter() {
    this.robotsService.collection.subscribe((robots) => {
      this.robots.next(robots);
    });
  }
}