import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PageListFavoritesRobotsComponent } from './page-list-favorites-robots.component';

describe('PageListFavoritesRobotsComponent', () => {
  let component: PageListFavoritesRobotsComponent;
  let fixture: ComponentFixture<PageListFavoritesRobotsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [PageListFavoritesRobotsComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(PageListFavoritesRobotsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
