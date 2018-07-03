import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { TeamFaqComponent } from './team-faq.component';

describe('TeamFaqComponent', () => {
  let component: TeamFaqComponent;
  let fixture: ComponentFixture<TeamFaqComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ TeamFaqComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(TeamFaqComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
