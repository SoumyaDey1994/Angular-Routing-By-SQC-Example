import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { LearnabilityComponent } from './learnability.component';

describe('LearnabilityComponent', () => {
  let component: LearnabilityComponent;
  let fixture: ComponentFixture<LearnabilityComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ LearnabilityComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(LearnabilityComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
