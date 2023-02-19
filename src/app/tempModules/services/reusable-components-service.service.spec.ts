import { TestBed } from '@angular/core/testing';

import { ReusableComponentsServiceService } from './reusable-components-service.service';

describe('ReusableComponentsServiceService', () => {
  let service: ReusableComponentsServiceService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(ReusableComponentsServiceService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
