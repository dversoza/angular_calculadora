import { TestBed } from '@angular/core/testing';

import { SomarService } from './somar.service';

describe('SomarService', () => {
  let service: SomarService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(SomarService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
