import { TestBed } from '@angular/core/testing';

import { GiftListService } from './gift-list.service';

describe('GiftListService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: GiftListService = TestBed.get(GiftListService);
    expect(service).toBeTruthy();
  });
});
