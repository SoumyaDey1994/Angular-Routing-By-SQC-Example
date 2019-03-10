import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { EfficiencyDefComponent } from './efficiency-def.component';

describe('EfficiencyDefComponent', () => {
  let component: EfficiencyDefComponent;
  let fixture: ComponentFixture<EfficiencyDefComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ EfficiencyDefComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(EfficiencyDefComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
