import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ButtonForItemsComponent } from './button-for-items.component';

describe('ButtonForItemsComponent', () => {
  let component: ButtonForItemsComponent;
  let fixture: ComponentFixture<ButtonForItemsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ButtonForItemsComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ButtonForItemsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
