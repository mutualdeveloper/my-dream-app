/* tslint:disable:no-unused-variable */
import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { By } from '@angular/platform-browser';
import { DebugElement } from '@angular/core';

import { InstitucionalComponent } from './institucional.component';

describe('InstitucionalComponent', () => {
  let component: InstitucionalComponent;
  let fixture: ComponentFixture<InstitucionalComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ InstitucionalComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(InstitucionalComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
