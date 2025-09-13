import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ViewChild6Component } from './view-child-6.component';

describe('ViewChild6Component', () => {
  let component: ViewChild6Component;
  let fixture: ComponentFixture<ViewChild6Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ViewChild6Component]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ViewChild6Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
