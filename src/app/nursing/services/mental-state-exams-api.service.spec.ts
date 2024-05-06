import { TestBed } from '@angular/core/testing';

import { MentalStateExamsApiService } from './mental-state-exams-api.service';

describe('MentalStateExamsApiService', () => {
  let service: MentalStateExamsApiService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(MentalStateExamsApiService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
