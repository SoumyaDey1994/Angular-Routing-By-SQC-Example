import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AdaptibilityComponent } from './adaptibility.component';

describe('AdaptibilityComponent', () => {
  let component: AdaptibilityComponent;
  let fixture: ComponentFixture<AdaptibilityComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AdaptibilityComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AdaptibilityComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
