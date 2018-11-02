import { TestBed, inject } from '@angular/core/testing';

import { SermService } from './serm.service';

describe('SermService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [SermService]
    });
  });

  it('should be created', inject([SermService], (service: SermService) => {
    expect(service).toBeTruthy();
  }));
});
