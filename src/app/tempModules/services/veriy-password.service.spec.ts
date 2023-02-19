import { TestBed } from '@angular/core/testing';

import { VeriyPasswordService } from './veriy-password.service';

describe('VeriyPasswordService', () => {
  let service: VeriyPasswordService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(VeriyPasswordService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
