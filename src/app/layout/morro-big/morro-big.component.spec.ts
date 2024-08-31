import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MorroBigComponent } from './morro-big.component';

describe('MorroBigComponent', () => {
  let component: MorroBigComponent;
  let fixture: ComponentFixture<MorroBigComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [MorroBigComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(MorroBigComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
