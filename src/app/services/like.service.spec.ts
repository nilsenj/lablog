import { TestBed, inject } from '@angular/core/testing';

import { LikeService } from './like.service';

describe('LikeService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [LikeService]
    });
  });

  it('should be created', inject([LikeService], (service: LikeService) => {
    expect(service).toBeTruthy();
  }));
});
