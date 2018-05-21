/* tslint:disable:no-unused-variable */
import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { By } from '@angular/platform-browser';
import { DebugElement } from '@angular/core';

import { DcDatacentersComponent } from './dc-datacenters.component';

describe('DcDatacentersComponent', () => {
  let component: DcDatacentersComponent;
  let fixture: ComponentFixture<DcDatacentersComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ DcDatacentersComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(DcDatacentersComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
