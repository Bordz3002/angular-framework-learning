import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ViewChild2Component } from './view-child-2.component';

describe('ViewChild2Component', () => {
  let component: ViewChild2Component;
  let fixture: ComponentFixture<ViewChild2Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ViewChild2Component]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ViewChild2Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
