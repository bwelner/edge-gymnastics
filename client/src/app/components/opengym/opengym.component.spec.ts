import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { OpengymComponent } from './opengym.component';

describe('OpengymComponent', () => {
  let component: OpengymComponent;
  let fixture: ComponentFixture<OpengymComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ OpengymComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(OpengymComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
