import { ComponentFixture, TestBed } from '@angular/core/testing';

import { IconFavoriteComponent } from './icon-favorite.component';

describe('IconFavoriteComponent', () => {
  let component: IconFavoriteComponent;
  let fixture: ComponentFixture<IconFavoriteComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [IconFavoriteComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(IconFavoriteComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
