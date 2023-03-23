import { TestBed } from '@angular/core/testing';

import { DtllCurEstuService } from './dtll-cur-estu.service';

describe('DtllCurEstuService', () => {
  let service: DtllCurEstuService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(DtllCurEstuService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
