import { TestBed } from '@angular/core/testing';

import { SecureSvcService } from './secure-svc.service';

describe('SecureSvcService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: SecureSvcService = TestBed.get(SecureSvcService);
    expect(service).toBeTruthy();
  });
});
