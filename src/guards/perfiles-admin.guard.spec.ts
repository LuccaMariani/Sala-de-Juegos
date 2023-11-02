import { TestBed } from '@angular/core/testing';

import { PerfilesAdminGuard } from './perfiles-admin.guard';

describe('PerfilesAdminGuard', () => {
  let guard: PerfilesAdminGuard;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    guard = TestBed.inject(PerfilesAdminGuard);
  });

  it('should be created', () => {
    expect(guard).toBeTruthy();
  });
});
