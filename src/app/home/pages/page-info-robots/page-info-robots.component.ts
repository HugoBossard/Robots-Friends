import { Component, inject } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Robot } from '../../../core/models/robot';
import { RobotsService } from '../../services/robots.service';

@Component({
  selector: 'app-page-info-robots',
  templateUrl: './page-info-robots.component.html',
  styleUrl: './page-info-robots.component.scss'
})
export class PageInfoRobotsComponent { 
  robot!: Robot;

  private robotsService = inject(RobotsService);
  private activatedRoute = inject(ActivatedRoute);

  ngOnInit() {
    this.activatedRoute.params.subscribe((params) => {
      this.robotsService.getRobotById(params['id']).subscribe((robot) => {
        this.robot = robot;
      });
    });
  }
}