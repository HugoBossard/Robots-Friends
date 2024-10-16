import { Component, inject } from '@angular/core';
import { Router } from '@angular/router';
import { Robot } from '../../../core/models/robot';
import { RobotsService } from '../../../home/services/robots.service';

@Component({
  selector: 'app-page-list-favorites-robots',
  templateUrl: './page-list-favorites-robots.component.html',
  styleUrl: './page-list-favorites-robots.component.scss'
})
export class PageListFavoritesRobotsComponent {
  robotsInFavorite!: Robot[];

  private robotsService = inject(RobotsService);
  
  constructor(private router: Router) {}

  ngOnInit() {
    this.robotsService.getRobotsInFavorite().subscribe((robots) => {
      this.robotsInFavorite = robots;
    });
  }

  getRobotInfo(robotId: String) {
    this.router.navigate(["home", "robots", robotId]);
  }
}