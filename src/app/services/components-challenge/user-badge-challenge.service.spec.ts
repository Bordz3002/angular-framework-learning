import { TestBed } from '@angular/core/testing';

import { UserBadgeChallengeService } from './user-badge-challenge.service';

describe('UserBadgeChallengeService', () => {
  let service: UserBadgeChallengeService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(UserBadgeChallengeService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
