import { TestBed } from '@angular/core/testing';

import { PerfilesGuard } from './perfiles.guard';

describe('PerfilesGuard', () => {
  let guard: PerfilesGuard;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    guard = TestBed.inject(PerfilesGuard);
  });

  it('should be created', () => {
    expect(guard).toBeTruthy();
  });
});
