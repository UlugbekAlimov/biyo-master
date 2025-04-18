import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MasterProfileSetupComponent } from './master-profile-setup.component';

describe('MasterProfileSetupComponent', () => {
  let component: MasterProfileSetupComponent;
  let fixture: ComponentFixture<MasterProfileSetupComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [MasterProfileSetupComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(MasterProfileSetupComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
