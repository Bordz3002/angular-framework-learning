import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ViewChild1Component } from './view-child-1.component';

describe('ViewChild1Component', () => {
  let component: ViewChild1Component;
  let fixture: ComponentFixture<ViewChild1Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ViewChild1Component]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ViewChild1Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
