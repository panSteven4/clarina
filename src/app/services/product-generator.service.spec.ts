import { TestBed } from '@angular/core/testing';

import { ProductGeneratorService } from './product-generator.service';

describe('ProductGeneratorService', () => {
  let service: ProductGeneratorService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(ProductGeneratorService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
