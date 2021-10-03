import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AddacarComponent } from './addacar.component';

describe('AddacarComponent', () => {
  let component: AddacarComponent;
  let fixture: ComponentFixture<AddacarComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AddacarComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AddacarComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
