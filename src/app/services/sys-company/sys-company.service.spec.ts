import { TestBed } from '@angular/core/testing';

import { SysCompanyService } from './sys-company.service';

describe('SysCompanyService', () => {
  let service: SysCompanyService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(SysCompanyService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
