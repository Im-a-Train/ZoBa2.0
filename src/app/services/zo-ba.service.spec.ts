import { TestBed } from '@angular/core/testing';

import { ZoBaService } from './zo-ba.service';

describe('ZoBaService', () => {
  let service: ZoBaService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(ZoBaService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
