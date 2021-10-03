import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { SearchfrequenttripComponent } from './searchfrequenttrip.component';

describe('SearchfrequenttripComponent', () => {
  let component: SearchfrequenttripComponent;
  let fixture: ComponentFixture<SearchfrequenttripComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ SearchfrequenttripComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SearchfrequenttripComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
