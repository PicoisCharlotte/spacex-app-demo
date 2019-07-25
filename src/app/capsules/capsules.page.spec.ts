import { CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CapsulesPage } from './capsules.page';

describe('CapsulesPage', () => {
  let component: CapsulesPage;
  let fixture: ComponentFixture<CapsulesPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CapsulesPage ],
      schemas: [CUSTOM_ELEMENTS_SCHEMA],
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CapsulesPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
