import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { OrganizationsDialogComponent } from './organizations-dialog.component';

describe('OrganizationsDialogComponent', () => {
  let component: OrganizationsDialogComponent;
  let fixture: ComponentFixture<OrganizationsDialogComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ OrganizationsDialogComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(OrganizationsDialogComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
