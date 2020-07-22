import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { TodsComponent } from './tods.component';

describe('TodsComponent', () => {
  let component: TodsComponent;
  let fixture: ComponentFixture<TodsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ TodsComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(TodsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
