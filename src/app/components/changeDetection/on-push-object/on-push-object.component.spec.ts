import { ComponentFixture, TestBed } from '@angular/core/testing';

import { OnPushObjectComponent } from './on-push-object.component';

describe('OnPushObjectComponent', () => {
  let component: OnPushObjectComponent;
  let fixture: ComponentFixture<OnPushObjectComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [OnPushObjectComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(OnPushObjectComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
