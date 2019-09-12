import { TestBed } from '@angular/core/testing';

import { DivideInCollumnService } from './divide-in-collumn.service';

describe('DivideInCollumnService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: DivideInCollumnService = TestBed.get(DivideInCollumnService);
    expect(service).toBeTruthy();
  });
});
