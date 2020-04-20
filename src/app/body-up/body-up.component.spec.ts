import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { BodyUpComponent } from './body-up.component';

describe('BodyUpComponent', () => {
  let component: BodyUpComponent;
  let fixture: ComponentFixture<BodyUpComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ BodyUpComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(BodyUpComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
