import { TestBed, inject } from '@angular/core/testing';

import { DojomailServiceService } from './dojomail-service.service';

describe('DojomailServiceService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [DojomailServiceService]
    });
  });

  it('should be created', inject([DojomailServiceService], (service: DojomailServiceService) => {
    expect(service).toBeTruthy();
  }));
});
