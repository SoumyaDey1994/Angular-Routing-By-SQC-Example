import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { FunctionalityDefComponent } from './functionality-def.component';

describe('FunctionalityDefComponent', () => {
  let component: FunctionalityDefComponent;
  let fixture: ComponentFixture<FunctionalityDefComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ FunctionalityDefComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(FunctionalityDefComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
