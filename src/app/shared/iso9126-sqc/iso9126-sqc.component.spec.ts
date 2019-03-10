import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { Iso9126SqcComponent } from './iso9126-sqc.component';

describe('Iso9126SqcComponent', () => {
  let component: Iso9126SqcComponent;
  let fixture: ComponentFixture<Iso9126SqcComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ Iso9126SqcComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Iso9126SqcComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
