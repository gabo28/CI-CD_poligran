import { TestBed } from '@angular/core/testing';

import { UrbanizationsService } from './urbanizations.service';

describe('UrbanizationsService', () => {
  let service: UrbanizationsService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(UrbanizationsService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
