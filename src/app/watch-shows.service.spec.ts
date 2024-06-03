import { TestBed } from '@angular/core/testing';

import { WatchShowsService } from './watch-shows.service';

describe('WatchShowsService', () => {
  let service: WatchShowsService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(WatchShowsService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
