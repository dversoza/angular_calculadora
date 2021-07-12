import { TestBed } from '@angular/core/testing';

import { DividirService } from './dividir.service';

describe('DividirService', () => {
  let service: DividirService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(DividirService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
