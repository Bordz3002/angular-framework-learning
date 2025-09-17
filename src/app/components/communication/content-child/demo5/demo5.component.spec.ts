import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ContentChildDemo5 } from './demo5.component';

describe('ContentChildDemo5', () => {
  let component: ContentChildDemo5;
  let fixture: ComponentFixture<ContentChildDemo5>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ContentChildDemo5]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ContentChildDemo5);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
