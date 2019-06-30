import { CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { LaunchpadPage } from './launchpad.page';

describe('LaunchpadPage', () => {
  let component: LaunchpadPage;
  let fixture: ComponentFixture<LaunchpadPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ LaunchpadPage ],
      schemas: [CUSTOM_ELEMENTS_SCHEMA],
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(LaunchpadPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
