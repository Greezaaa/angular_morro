import { ComponentFixture, TestBed } from '@angular/core/testing';

import { HeroLeftPartComponent } from './hero-left-part.component';

describe('HeroLeftPartComponent', () => {
  let component: HeroLeftPartComponent;
  let fixture: ComponentFixture<HeroLeftPartComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [HeroLeftPartComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(HeroLeftPartComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
