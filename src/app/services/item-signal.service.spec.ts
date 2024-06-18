import { TestBed } from '@angular/core/testing';

import { ItemSignalService } from './item-signal.service';

describe('ItemSignalService', () => {
  let service: ItemSignalService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(ItemSignalService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
