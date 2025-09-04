import { ComponentFixture, TestBed } from '@angular/core/testing';

import { OnPushObjectChallengeComponent } from './on-push-object-challenge.component';

describe('OnPushObjectChallengeComponent', () => {
  let component: OnPushObjectChallengeComponent;
  let fixture: ComponentFixture<OnPushObjectChallengeComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [OnPushObjectChallengeComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(OnPushObjectChallengeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
