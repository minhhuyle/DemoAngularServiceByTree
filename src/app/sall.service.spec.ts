import { TestBed, inject } from '@angular/core/testing';

import { SallService } from './sall.service';

describe('SallService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [SallService]
    });
  });

  it('should be created', inject([SallService], (service: SallService) => {
    expect(service).toBeTruthy();
  }));
});
