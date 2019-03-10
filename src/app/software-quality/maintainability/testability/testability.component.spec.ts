import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { TestabilityComponent } from './testability.component';

describe('TestabilityComponent', () => {
  let component: TestabilityComponent;
  let fixture: ComponentFixture<TestabilityComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ TestabilityComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(TestabilityComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
