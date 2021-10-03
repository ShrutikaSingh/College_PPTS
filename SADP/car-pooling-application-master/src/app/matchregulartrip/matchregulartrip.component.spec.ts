import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MatchregulartripComponent } from './matchregulartrip.component';

describe('MatchregulartripComponent', () => {
  let component: MatchregulartripComponent;
  let fixture: ComponentFixture<MatchregulartripComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MatchregulartripComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MatchregulartripComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
