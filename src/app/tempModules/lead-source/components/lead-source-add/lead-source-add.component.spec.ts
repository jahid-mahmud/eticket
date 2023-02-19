import { ComponentFixture, TestBed } from '@angular/core/testing';

import { LeadSourceAddComponent } from './lead-source-add.component';

describe('LeadSourceAddComponent', () => {
  let component: LeadSourceAddComponent;
  let fixture: ComponentFixture<LeadSourceAddComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ LeadSourceAddComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(LeadSourceAddComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
