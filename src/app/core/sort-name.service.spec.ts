import { TestBed } from '@angular/core/testing';

import { SortNameService } from './sort-name.service';

describe('SortNameService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: SortNameService = TestBed.get(SortNameService);
    expect(service).toBeTruthy();
  });
});
