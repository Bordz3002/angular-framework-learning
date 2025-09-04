import { ComponentFixture, TestBed } from '@angular/core/testing';

import { UserBadgeChallengeComponent } from './user-badge-challenge.component';

describe('UserBadgeChallengeComponent', () => {
  let component: UserBadgeChallengeComponent;
  let fixture: ComponentFixture<UserBadgeChallengeComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [UserBadgeChallengeComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(UserBadgeChallengeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
