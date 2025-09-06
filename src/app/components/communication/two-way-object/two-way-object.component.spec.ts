import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TwoWayObjectComponent } from './two-way-object.component';

describe('TwoWayObjectComponent', () => {
  let component: TwoWayObjectComponent;
  let fixture: ComponentFixture<TwoWayObjectComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [TwoWayObjectComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(TwoWayObjectComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
