import { TestBed } from '@angular/core/testing';

import { LaunchPadService } from './launchPad.service';

describe('LaunchPadService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: LaunchPadService = TestBed.get(LaunchPadService);
    expect(service).toBeTruthy();
  });
});
