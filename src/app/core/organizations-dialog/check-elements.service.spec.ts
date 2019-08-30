import { TestBed } from '@angular/core/testing';

import { CheckElementsService } from './check-elements.service';

describe('CheckElementsService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: CheckElementsService = TestBed.get(CheckElementsService);
    expect(service).toBeTruthy();
  });
});
