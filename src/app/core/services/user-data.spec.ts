import { TestBed } from '@angular/core/testing';

import { HeroData } from './hero-data';

describe('HeroData', () => {
  let service: HeroData;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(HeroData);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
