import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CreateregulartripComponent } from './createregulartrip.component';

describe('CreateregulartripComponent', () => {
  let component: CreateregulartripComponent;
  let fixture: ComponentFixture<CreateregulartripComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CreateregulartripComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CreateregulartripComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
