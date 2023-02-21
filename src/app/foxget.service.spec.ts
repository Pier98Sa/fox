import { TestBed } from '@angular/core/testing';

import { FoxgetService } from './foxget.service';

describe('FoxgetService', () => {
  let service: FoxgetService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(FoxgetService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
