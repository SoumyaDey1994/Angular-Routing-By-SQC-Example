import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ResourceBehaviorComponent } from './resource-behavior.component';

describe('ResourceBehaviorComponent', () => {
  let component: ResourceBehaviorComponent;
  let fixture: ComponentFixture<ResourceBehaviorComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ResourceBehaviorComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ResourceBehaviorComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
