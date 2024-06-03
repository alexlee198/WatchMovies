import { TestBed } from '@angular/core/testing';

import { WatchMoviesService } from './watch-movies.service';

describe('WatchMoviesService', () => {
  let service: WatchMoviesService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(WatchMoviesService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
