import { TestBed } from '@angular/core/testing';

import { MultiplicarService } from './multiplicar.service';

describe('MultiplicarService', () => {
  let service: MultiplicarService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(MultiplicarService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
