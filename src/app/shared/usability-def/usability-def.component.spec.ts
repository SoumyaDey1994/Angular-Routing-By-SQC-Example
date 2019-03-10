import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { UsabilityDefComponent } from './usability-def.component';

describe('UsabilityDefComponent', () => {
  let component: UsabilityDefComponent;
  let fixture: ComponentFixture<UsabilityDefComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ UsabilityDefComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(UsabilityDefComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
