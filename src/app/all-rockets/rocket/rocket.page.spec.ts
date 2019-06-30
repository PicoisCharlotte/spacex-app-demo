import { CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { RocketPage } from './rocket.page';

describe('RocketPage', () => {
  let component: RocketPage;
  let fixture: ComponentFixture<RocketPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ RocketPage ],
      schemas: [CUSTOM_ELEMENTS_SCHEMA],
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(RocketPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
