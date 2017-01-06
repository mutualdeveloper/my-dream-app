/* tslint:disable:no-unused-variable */
import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { By } from '@angular/platform-browser';
import { DebugElement } from '@angular/core';

import { SliderbarComponent } from './sliderbar.component';

describe('SliderbarComponent', () => {
  let component: SliderbarComponent;
  let fixture: ComponentFixture<SliderbarComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ SliderbarComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SliderbarComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
