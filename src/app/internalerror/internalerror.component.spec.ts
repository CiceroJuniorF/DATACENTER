/* tslint:disable:no-unused-variable */
import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { By } from '@angular/platform-browser';
import { DebugElement } from '@angular/core';

import { InternalerrorComponent } from './internalerror.component';

describe('InternalerrorComponent', () => {
  let component: InternalerrorComponent;
  let fixture: ComponentFixture<InternalerrorComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ InternalerrorComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(InternalerrorComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
