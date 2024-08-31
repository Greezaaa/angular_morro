import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MorroTxikiComponent } from './morro-txiki.component';

describe('MorroTxikiComponent', () => {
  let component: MorroTxikiComponent;
  let fixture: ComponentFixture<MorroTxikiComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [MorroTxikiComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(MorroTxikiComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
