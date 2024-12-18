import { Component, inject } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { BehaviorSubject } from 'rxjs';
import { Robot } from '../../../core/models/robot';
import { RobotsService } from '../../services/robots.service';

@Component({
  selector: 'app-page-info-robots',
  templateUrl: './page-info-robots.component.html',
  styleUrl: './page-info-robots.component.scss'
})
export class PageInfoRobotsComponent { 
  robot!: Robot;
  isFavorite = new BehaviorSubject<Boolean>(false);

  private robotsService = inject(RobotsService);
  private activatedRoute = inject(ActivatedRoute);

  constructor(private router: Router) {}

  ngOnInit() {
    this.activatedRoute.params.subscribe((params) => {
      this.robotsService.getRobotById(params['id']).subscribe((robot) => {
        this.robot = robot;
        this.isFavorite.next(robot.isFavorite);
      });
    });
  }

  goBackToHome() {
    this.router.navigateByUrl("/home");
  }

  toggleFavorite(robot: Robot) {
    this.robotsService.toggleInFavorite(robot.id);
    robot.isFavorite = !robot.isFavorite;
    this.isFavorite.next(robot.isFavorite);
  }
}