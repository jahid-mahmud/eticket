import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ProjectCreateCompleteModalComponent } from './project-create-complete-modal.component';

describe('ProjectCreateCompleteModalComponent', () => {
  let component: ProjectCreateCompleteModalComponent;
  let fixture: ComponentFixture<ProjectCreateCompleteModalComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ProjectCreateCompleteModalComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ProjectCreateCompleteModalComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
