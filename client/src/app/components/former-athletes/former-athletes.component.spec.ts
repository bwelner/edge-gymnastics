import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { FormerAthletesComponent } from './former-athletes.component';

describe('FormerAthletesComponent', () => {
  let component: FormerAthletesComponent;
  let fixture: ComponentFixture<FormerAthletesComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ FormerAthletesComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(FormerAthletesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
