import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ChangeabilityComponent } from './changeability.component';

describe('ChangeabilityComponent', () => {
  let component: ChangeabilityComponent;
  let fixture: ComponentFixture<ChangeabilityComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ChangeabilityComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ChangeabilityComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
