import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { FaultToleranceComponent } from './fault-tolerance.component';

describe('FaultToleranceComponent', () => {
  let component: FaultToleranceComponent;
  let fixture: ComponentFixture<FaultToleranceComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ FaultToleranceComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(FaultToleranceComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
