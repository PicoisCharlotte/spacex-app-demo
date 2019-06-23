import { TestBed } from '@angular/core/testing';

import { NextLaunchService } from './nextLaunch.service';

describe('LaunchService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: NextLaunchService = TestBed.get(NextLaunchService);
    expect(service).toBeTruthy();
  });
});
