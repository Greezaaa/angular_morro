import { ComponentFixture, TestBed } from '@angular/core/testing';

import { HeroRightPartComponent } from './hero-right-part.component';

describe('HeroRightPartComponent', () => {
  let component: HeroRightPartComponent;
  let fixture: ComponentFixture<HeroRightPartComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [HeroRightPartComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(HeroRightPartComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
