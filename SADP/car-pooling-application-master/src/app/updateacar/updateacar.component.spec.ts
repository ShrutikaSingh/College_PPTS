import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { UpdateacarComponent } from './updateacar.component';

describe('UpdateacarComponent', () => {
  let component: UpdateacarComponent;
  let fixture: ComponentFixture<UpdateacarComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ UpdateacarComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(UpdateacarComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
