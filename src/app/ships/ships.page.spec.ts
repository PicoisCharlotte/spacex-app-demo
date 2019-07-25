import { CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ShipsPage } from './ships.page';

describe('ShipsPage', () => {
  let component: ShipsPage;
  let fixture: ComponentFixture<ShipsPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ShipsPage ],
      schemas: [CUSTOM_ELEMENTS_SCHEMA],
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ShipsPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
