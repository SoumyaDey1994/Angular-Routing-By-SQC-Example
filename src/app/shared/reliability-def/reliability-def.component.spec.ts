import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ReliabilityDefComponent } from './reliability-def.component';

describe('ReliabilityDefComponent', () => {
  let component: ReliabilityDefComponent;
  let fixture: ComponentFixture<ReliabilityDefComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ReliabilityDefComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ReliabilityDefComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
