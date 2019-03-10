import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MaintainabilityDefComponent } from './maintainability-def.component';

describe('MaintainabilityDefComponent', () => {
  let component: MaintainabilityDefComponent;
  let fixture: ComponentFixture<MaintainabilityDefComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MaintainabilityDefComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MaintainabilityDefComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
