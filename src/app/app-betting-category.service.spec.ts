import { TestBed } from '@angular/core/testing';

import { AppBettingCategoryService } from './app-betting-category.service';

describe('AppBettingCategoryService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: AppBettingCategoryService = TestBed.get(AppBettingCategoryService);
    expect(service).toBeTruthy();
  });
});
