import { TestBed } from '@angular/core/testing';

import { VerificationCodeStorageService } from './verification-code-storage.service';

describe('VerificationCodeStorageService', () => {
  let service: VerificationCodeStorageService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(VerificationCodeStorageService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
