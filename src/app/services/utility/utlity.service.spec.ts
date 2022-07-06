import { TestBed } from '@angular/core/testing';

import { UtlityServicei } from './utility.service';

describe('UtlityService', () => {
  let service: UtlityServicei;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(UtlityServicei);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
