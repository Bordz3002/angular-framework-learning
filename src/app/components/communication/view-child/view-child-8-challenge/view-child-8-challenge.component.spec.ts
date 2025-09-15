import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ViewChild8ChallengeComponent } from './view-child-8-challenge.component';

describe('ViewChild8ChallengeComponent', () => {
  let component: ViewChild8ChallengeComponent;
  let fixture: ComponentFixture<ViewChild8ChallengeComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ViewChild8ChallengeComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ViewChild8ChallengeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
