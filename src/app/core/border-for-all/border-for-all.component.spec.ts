import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { BorderForAllComponent } from './border-for-all.component';

describe('BorderForAllComponent', () => {
  let component: BorderForAllComponent;
  let fixture: ComponentFixture<BorderForAllComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ BorderForAllComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(BorderForAllComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
