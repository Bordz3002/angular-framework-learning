import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ViewChild5Component } from './view-child-5.component';

describe('ViewChild5Component', () => {
  let component: ViewChild5Component;
  let fixture: ComponentFixture<ViewChild5Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ViewChild5Component]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ViewChild5Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
