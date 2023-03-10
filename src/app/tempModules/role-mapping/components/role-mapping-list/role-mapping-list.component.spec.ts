import { ComponentFixture, TestBed } from '@angular/core/testing';

import { RoleMappingListComponent } from './role-mapping-list.component';

describe('RoleMappingListComponent', () => {
  let component: RoleMappingListComponent;
  let fixture: ComponentFixture<RoleMappingListComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ RoleMappingListComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(RoleMappingListComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
