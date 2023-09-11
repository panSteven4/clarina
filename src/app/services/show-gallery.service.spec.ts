import { TestBed } from '@angular/core/testing';

import { ShowGalleryService } from './show-gallery.service';

describe('ShowGalleryService', () => {
  let service: ShowGalleryService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(ShowGalleryService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
