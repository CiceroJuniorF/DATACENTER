/* tslint:disable:no-unused-variable */
import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { By } from '@angular/platform-browser';
import { DebugElement } from '@angular/core';

import { DcCorpClientComponent } from './dc-corp-client.component';

describe('DcCorpClientComponent', () => {
  let component: DcCorpClientComponent;
  let fixture: ComponentFixture<DcCorpClientComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ DcCorpClientComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(DcCorpClientComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
