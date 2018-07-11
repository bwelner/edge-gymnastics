import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { RecruitableComponent } from './recruitable.component';

describe('RecruitableComponent', () => {
  let component: RecruitableComponent;
  let fixture: ComponentFixture<RecruitableComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ RecruitableComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(RecruitableComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
