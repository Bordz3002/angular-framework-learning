import { ComponentFixture, TestBed } from '@angular/core/testing';

import { OneWayChallengeComponent } from './one-way-challenge.component';

describe('OneWayChallengeComponent', () => {
  let component: OneWayChallengeComponent;
  let fixture: ComponentFixture<OneWayChallengeComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [OneWayChallengeComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(OneWayChallengeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
