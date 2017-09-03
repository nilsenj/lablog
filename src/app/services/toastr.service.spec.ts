import { TestBed, inject } from '@angular/core/testing';

import { ToastrService } from './toastr.service';

describe('ToastrService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [ToastrService]
    });
  });

  it('should be created', inject([ToastrService], (service: ToastrService) => {
    expect(service).toBeTruthy();
  }));
});
