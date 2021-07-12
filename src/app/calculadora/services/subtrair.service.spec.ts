import { TestBed } from '@angular/core/testing';

import { SubtrairService } from './subtrair.service';

describe('SubtrairService', () => {
  let service: SubtrairService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(SubtrairService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
