import { TestBed } from '@angular/core/testing';

import { AValueService } from './a-value.service';

describe('AValueService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: AValueService = TestBed.get(AValueService);
    expect(service).toBeTruthy();
  });
});
