import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { InteroperabilityComponent } from './interoperability.component';

describe('InteroperabilityComponent', () => {
  let component: InteroperabilityComponent;
  let fixture: ComponentFixture<InteroperabilityComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ InteroperabilityComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(InteroperabilityComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
