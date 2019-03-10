import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ReplaceabilityComponent } from './replaceability.component';

describe('ReplaceabilityComponent', () => {
  let component: ReplaceabilityComponent;
  let fixture: ComponentFixture<ReplaceabilityComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ReplaceabilityComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ReplaceabilityComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
