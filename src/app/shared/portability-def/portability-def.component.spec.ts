import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { PortabilityDefComponent } from './portability-def.component';

describe('PortabilityDefComponent', () => {
  let component: PortabilityDefComponent;
  let fixture: ComponentFixture<PortabilityDefComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ PortabilityDefComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(PortabilityDefComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
