import { TestBed } from '@angular/core/testing';

import { GetLetterPositionService } from './get-letter-position.service';

describe('GetLetterPositionService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: GetLetterPositionService = TestBed.get(GetLetterPositionService);
    expect(service).toBeTruthy();
  });
});
