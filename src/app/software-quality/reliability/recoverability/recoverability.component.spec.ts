import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { RecoverabilityComponent } from './recoverability.component';

describe('RecoverabilityComponent', () => {
  let component: RecoverabilityComponent;
  let fixture: ComponentFixture<RecoverabilityComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ RecoverabilityComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(RecoverabilityComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
