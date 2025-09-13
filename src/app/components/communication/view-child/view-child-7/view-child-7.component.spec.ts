import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ViewChild7Component } from './view-child-7.component';

describe('ViewChild7Component', () => {
  let component: ViewChild7Component;
  let fixture: ComponentFixture<ViewChild7Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ViewChild7Component]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ViewChild7Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
