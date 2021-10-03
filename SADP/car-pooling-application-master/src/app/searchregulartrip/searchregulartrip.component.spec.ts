import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { SearchregulartripComponent } from './searchregulartrip.component';

describe('SearchregulartripComponent', () => {
  let component: SearchregulartripComponent;
  let fixture: ComponentFixture<SearchregulartripComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ SearchregulartripComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SearchregulartripComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
