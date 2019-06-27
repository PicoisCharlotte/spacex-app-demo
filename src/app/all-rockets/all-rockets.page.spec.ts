import { CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AllRocketsPage } from './all-rockets.page';

describe('RocketPage', () => {
  let component: AllRocketsPage;
  let fixture: ComponentFixture<AllRocketsPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AllRocketsPage ],
      schemas: [CUSTOM_ELEMENTS_SCHEMA],
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AllRocketsPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
