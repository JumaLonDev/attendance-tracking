import { TestBed } from '@angular/core/testing';

import { RolesguardsGuard } from './rolesguards.guard';

describe('RolesguardsGuard', () => {
  let guard: RolesguardsGuard;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    guard = TestBed.inject(RolesguardsGuard);
  });

  it('should be created', () => {
    expect(guard).toBeTruthy();
  });
});
