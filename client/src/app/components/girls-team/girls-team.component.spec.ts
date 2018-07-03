import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { GirlsTeamComponent } from './girls-team.component';

describe('GirlsTeamComponent', () => {
  let component: GirlsTeamComponent;
  let fixture: ComponentFixture<GirlsTeamComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ GirlsTeamComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(GirlsTeamComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
