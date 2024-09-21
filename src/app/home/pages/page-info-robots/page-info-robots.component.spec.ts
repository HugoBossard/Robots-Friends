import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PageInfoRobotsComponent } from './page-info-robots.component';

describe('PageInfoRobotsComponent', () => {
  let component: PageInfoRobotsComponent;
  let fixture: ComponentFixture<PageInfoRobotsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [PageInfoRobotsComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(PageInfoRobotsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
