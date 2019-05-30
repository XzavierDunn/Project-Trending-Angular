import { TestBed } from '@angular/core/testing';

import { GlobalTrendsService } from './global-trends.service';

describe('GlobalTrendsService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: GlobalTrendsService = TestBed.get(GlobalTrendsService);
    expect(service).toBeTruthy();
  });
});
