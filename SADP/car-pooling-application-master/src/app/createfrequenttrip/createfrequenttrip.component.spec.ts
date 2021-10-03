import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CreatefrequenttripComponent } from './createfrequenttrip.component';

describe('CreatefrequenttripComponent', () => {
  let component: CreatefrequenttripComponent;
  let fixture: ComponentFixture<CreatefrequenttripComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CreatefrequenttripComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CreatefrequenttripComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
