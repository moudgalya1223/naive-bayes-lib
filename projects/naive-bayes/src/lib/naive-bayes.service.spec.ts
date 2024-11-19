import { TestBed } from '@angular/core/testing';

import { NaiveBayesService } from './naive-bayes.service';

describe('NaiveBayesService', () => {
  let service: NaiveBayesService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(NaiveBayesService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
