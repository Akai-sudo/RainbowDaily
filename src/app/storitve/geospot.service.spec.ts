import { TestBed } from '@angular/core/testing';

import { GeospotService } from './geospot.service';

describe('GeospotService', () => {
  let service: GeospotService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(GeospotService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
