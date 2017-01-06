/* tslint:disable:no-unused-variable */
import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { By } from '@angular/platform-browser';
import { DebugElement } from '@angular/core';

import { SocialbarComponent } from './socialbar.component';

describe('SocialbarComponent', () => {
  let component: SocialbarComponent;
  let fixture: ComponentFixture<SocialbarComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ SocialbarComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SocialbarComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
