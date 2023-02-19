import { ComponentFixture, TestBed } from '@angular/core/testing';

import { RoleMappinAddComponent } from './role-mappin-add.component';

describe('RoleMappinAddComponent', () => {
  let component: RoleMappinAddComponent;
  let fixture: ComponentFixture<RoleMappinAddComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ RoleMappinAddComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(RoleMappinAddComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
