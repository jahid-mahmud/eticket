import { ComponentFixture, TestBed } from '@angular/core/testing';

import { LeadSourceListComponent } from './lead-source-list.component';

describe('LeadSourceListComponent', () => {
  let component: LeadSourceListComponent;
  let fixture: ComponentFixture<LeadSourceListComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ LeadSourceListComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(LeadSourceListComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
