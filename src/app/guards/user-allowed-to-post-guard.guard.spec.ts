import { TestBed, async, inject } from '@angular/core/testing';

import { UserAllowedToPostGuardGuard } from './user-allowed-to-post-guard.guard';

describe('UserAllowedToPostGuardGuard', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [UserAllowedToPostGuardGuard]
    });
  });

  it('should ...', inject([UserAllowedToPostGuardGuard], (guard: UserAllowedToPostGuardGuard) => {
    expect(guard).toBeTruthy();
  }));
});
