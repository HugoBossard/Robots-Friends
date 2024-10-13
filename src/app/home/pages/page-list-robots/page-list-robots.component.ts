import { Component, inject } from '@angular/core';
import { Router } from '@angular/router';
import { Robot } from '../../../core/models/robot';
import { RobotsService } from '../../services/robots.service';
@Component({
  selector: 'app-page-list-robots',
  templateUrl: './page-list-robots.component.html',
  styleUrl: './page-list-robots.component.scss'
})
export class PageListRobotsComponent {
  robots!: Robot[];

  private robotsService = inject(RobotsService);
  
  constructor(private router: Router) {}

  ngOnInit() {
    this.robotsService.collection.subscribe((robots) => {
      this.robots = robots;
    });
  }

  getRobotInfo(robotId: String) {
    this.router.navigate(["home", "robots", robotId]);
  }

  toggleFavorite(robotId: String) {
    this.robotsService.toggleInFavorite(robotId);
  }
}