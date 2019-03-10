import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AccuratenessComponent } from './accurateness.component';

describe('AccuratenessComponent', () => {
  let component: AccuratenessComponent;
  let fixture: ComponentFixture<AccuratenessComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AccuratenessComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AccuratenessComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
