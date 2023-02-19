/* tslint:disable:no-unused-variable */

import { TestBed, async, inject } from '@angular/core/testing';
import { CoreDataService } from './core-data.service';

describe('Service: CoreData', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [CoreDataService]
    });
  });

  it('should ...', inject([CoreDataService], (service: CoreDataService) => {
    expect(service).toBeTruthy();
  }));
});
