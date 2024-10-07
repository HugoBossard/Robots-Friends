import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-detail-frame',
  templateUrl: './detail-frame.component.html',
  styleUrl: './detail-frame.component.scss'
})
export class DetailFrameComponent {
  @Input() title!: String;
  @Input() text!: String;
}