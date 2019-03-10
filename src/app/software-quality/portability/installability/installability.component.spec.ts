import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { InstallabilityComponent } from './installability.component';

describe('InstallabilityComponent', () => {
  let component: InstallabilityComponent;
  let fixture: ComponentFixture<InstallabilityComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ InstallabilityComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(InstallabilityComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
