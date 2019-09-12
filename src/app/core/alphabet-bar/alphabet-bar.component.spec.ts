import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AlphabetBarComponent } from './alphabet-bar.component';

describe('AlphabetBarComponent', () => {
  let component: AlphabetBarComponent;
  let fixture: ComponentFixture<AlphabetBarComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AlphabetBarComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AlphabetBarComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
