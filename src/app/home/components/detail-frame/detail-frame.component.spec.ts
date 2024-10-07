import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DetailFrameComponent } from './detail-frame.component';

describe('DetailFrameComponent', () => {
  let component: DetailFrameComponent;
  let fixture: ComponentFixture<DetailFrameComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [DetailFrameComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(DetailFrameComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
