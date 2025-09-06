import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TwoWayP2Component } from './two-way-p2.component';

describe('TwoWayP2Component', () => {
  let component: TwoWayP2Component;
  let fixture: ComponentFixture<TwoWayP2Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [TwoWayP2Component]
    })
    .compileComponents();

    fixture = TestBed.createComponent(TwoWayP2Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
