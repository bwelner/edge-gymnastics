import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { PreCompetitiveComponent } from './pre-competitive.component';

describe('PreCompetitiveComponent', () => {
  let component: PreCompetitiveComponent;
  let fixture: ComponentFixture<PreCompetitiveComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ PreCompetitiveComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(PreCompetitiveComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
