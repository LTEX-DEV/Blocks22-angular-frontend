import { TestBed, inject } from '@angular/core/testing';

import { AssesmentService } from './assesment.service';

describe('AssesmentService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [AssesmentService]
    });
  });

  it('should be created', inject([AssesmentService], (service: AssesmentService) => {
    expect(service).toBeTruthy();
  }));
});
