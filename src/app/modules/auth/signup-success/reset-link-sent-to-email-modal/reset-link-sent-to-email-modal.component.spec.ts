import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ResetLinkSentToEmailModalComponent } from './reset-link-sent-to-email-modal.component';

describe('ResetLinkSentToEmailModalComponent', () => {
  let component: ResetLinkSentToEmailModalComponent;
  let fixture: ComponentFixture<ResetLinkSentToEmailModalComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ResetLinkSentToEmailModalComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ResetLinkSentToEmailModalComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
