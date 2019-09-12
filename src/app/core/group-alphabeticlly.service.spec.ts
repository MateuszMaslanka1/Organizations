import { TestBed } from '@angular/core/testing';

import { GroupAlphabeticllyService } from './group-alphabeticlly.service';

describe('GroupAlphabeticllyService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: GroupAlphabeticllyService = TestBed.get(GroupAlphabeticllyService);
    expect(service).toBeTruthy();
  });
});
