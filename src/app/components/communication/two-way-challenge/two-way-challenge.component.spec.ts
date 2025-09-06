import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TwoWayChallengeComponent } from './two-way-challenge.component';

describe('TwoWayChallengeComponent', () => {
  let component: TwoWayChallengeComponent;
  let fixture: ComponentFixture<TwoWayChallengeComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [TwoWayChallengeComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(TwoWayChallengeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
