import { TestBed } from '@angular/core/testing';

import { LeadStageService } from './lead-stage.service';

describe('LeadStageService', () => {
  let service: LeadStageService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(LeadStageService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
