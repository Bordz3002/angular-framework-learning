import { ComponentFixture, TestBed } from '@angular/core/testing';

import { OneWayCommunicationObjectChallengeComponent } from './one-way-communication-object-challenge.component';

describe('OneWayCommunicationObjectChallengeComponent', () => {
  let component: OneWayCommunicationObjectChallengeComponent;
  let fixture: ComponentFixture<OneWayCommunicationObjectChallengeComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [OneWayCommunicationObjectChallengeComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(OneWayCommunicationObjectChallengeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
