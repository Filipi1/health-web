import { TestBed } from '@angular/core/testing';

import { ErrorCheckerService } from './error-checker.service';

describe('ErrorCheckerService', () => {
  let service: ErrorCheckerService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(ErrorCheckerService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
