import { TestBed } from '@angular/core/testing';

import { CalculateFrancService } from './calculate-franc.service';

describe('CalculateFrancService', () => {
  let service: CalculateFrancService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(CalculateFrancService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
