import { TestBed } from '@angular/core/testing';

import { FindLetterToChangeService } from './find-letter-to-change.service';

describe('FindLetterToChangeService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: FindLetterToChangeService = TestBed.get(FindLetterToChangeService);
    expect(service).toBeTruthy();
  });
});
