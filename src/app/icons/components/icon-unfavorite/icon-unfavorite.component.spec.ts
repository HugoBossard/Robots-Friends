import { ComponentFixture, TestBed } from '@angular/core/testing';

import { IconUnfavoriteComponent } from './icon-unfavorite.component';

describe('IconUnfavoriteComponent', () => {
  let component: IconUnfavoriteComponent;
  let fixture: ComponentFixture<IconUnfavoriteComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [IconUnfavoriteComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(IconUnfavoriteComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
