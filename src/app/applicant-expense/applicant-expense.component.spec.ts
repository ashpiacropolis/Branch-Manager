import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ApplicantExpenseComponent } from './applicant-expense.component';

describe('ApplicantExpenseComponent', () => {
  let component: ApplicantExpenseComponent;
  let fixture: ComponentFixture<ApplicantExpenseComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ApplicantExpenseComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ApplicantExpenseComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
