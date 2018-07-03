import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { BoysTeamComponent } from './boys-team.component';

describe('BoysTeamComponent', () => {
  let component: BoysTeamComponent;
  let fixture: ComponentFixture<BoysTeamComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ BoysTeamComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(BoysTeamComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
