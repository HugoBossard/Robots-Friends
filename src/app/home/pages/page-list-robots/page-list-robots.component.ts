import { Component, inject } from '@angular/core';
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

  ngOnInit() {
    this.robotsService.collection.subscribe((robots) => {
      this.robots = robots;
    });
  }
}