import { TestBed } from '@angular/core/testing';

import { OrdenadorServiceService } from './ordenador-service.service';

describe('OrdenadorServiceService', () => {
  let service: OrdenadorServiceService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(OrdenadorServiceService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
