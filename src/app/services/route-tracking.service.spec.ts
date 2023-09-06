import { TestBed } from '@angular/core/testing';

import { RouteTrackingService } from './route-tracking.service';

describe('RouteTrackingService', () => {
  let service: RouteTrackingService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(RouteTrackingService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
