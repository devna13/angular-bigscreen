import { TestBed } from '@angular/core/testing';

import { BigScreenService } from './bigscreen.service';

describe('BigScreenService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: BigScreenService = TestBed.get(BigScreenService);
    expect(service).toBeTruthy();
  });
});
