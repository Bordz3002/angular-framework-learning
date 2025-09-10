import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ViewChild3Component } from './view-child-3.component';

describe('ViewChild3Component', () => {
  let component: ViewChild3Component;
  let fixture: ComponentFixture<ViewChild3Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ViewChild3Component]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ViewChild3Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
