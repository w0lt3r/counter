import { TestBed } from '@angular/core/testing';

import { CounterSyncService } from './counter-sync.service';

describe('CounterSyncService', () => {
  let service: CounterSyncService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(CounterSyncService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
