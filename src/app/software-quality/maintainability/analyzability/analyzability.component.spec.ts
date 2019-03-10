import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AnalyzabilityComponent } from './analyzability.component';

describe('AnalyzabilityComponent', () => {
  let component: AnalyzabilityComponent;
  let fixture: ComponentFixture<AnalyzabilityComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AnalyzabilityComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AnalyzabilityComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
