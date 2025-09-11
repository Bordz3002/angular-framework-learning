import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ViewChild4Component } from './view-child-4.component';

describe('ViewChild4Component', () => {
  let component: ViewChild4Component;
  let fixture: ComponentFixture<ViewChild4Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ViewChild4Component]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ViewChild4Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
