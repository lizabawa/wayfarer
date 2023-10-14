import { TestBed } from '@angular/core/testing';

import { AppCitySearchService } from './app-city-search.service';

describe('AppCitySearchService', () => {
  let service: AppCitySearchService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(AppCitySearchService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
