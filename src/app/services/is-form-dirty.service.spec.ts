import { TestBed } from '@angular/core/testing';

import { isFormDirtyService } from './is-form-dirty.service';

describe('IsFormDirtyService', () => {
  let service: isFormDirtyService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(isFormDirtyService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
