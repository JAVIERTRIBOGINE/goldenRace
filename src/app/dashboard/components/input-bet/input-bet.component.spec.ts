import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { InputBetComponent } from './input-bet.component';

describe('InputBetComponent', () => {
  let component: InputBetComponent;
  let fixture: ComponentFixture<InputBetComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ InputBetComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(InputBetComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
