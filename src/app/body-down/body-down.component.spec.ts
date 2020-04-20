import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { BodyDownComponent } from './body-down.component';

describe('BodyDownComponent', () => {
  let component: BodyDownComponent;
  let fixture: ComponentFixture<BodyDownComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ BodyDownComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(BodyDownComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
