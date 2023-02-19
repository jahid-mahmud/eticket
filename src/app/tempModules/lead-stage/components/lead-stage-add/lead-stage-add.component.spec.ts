import { ComponentFixture, TestBed } from '@angular/core/testing';

import { LeadStageAddComponent } from './lead-stage-add.component';

describe('LeadStageAddComponent', () => {
  let component: LeadStageAddComponent;
  let fixture: ComponentFixture<LeadStageAddComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ LeadStageAddComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(LeadStageAddComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
