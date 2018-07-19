import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { FieldTripsComponent } from './field-trips.component';

describe('FieldTripsComponent', () => {
  let component: FieldTripsComponent;
  let fixture: ComponentFixture<FieldTripsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ FieldTripsComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(FieldTripsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
