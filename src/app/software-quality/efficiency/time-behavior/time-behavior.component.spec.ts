import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { TimeBehaviorComponent } from './time-behavior.component';

describe('TimeBehaviorComponent', () => {
  let component: TimeBehaviorComponent;
  let fixture: ComponentFixture<TimeBehaviorComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ TimeBehaviorComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(TimeBehaviorComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
