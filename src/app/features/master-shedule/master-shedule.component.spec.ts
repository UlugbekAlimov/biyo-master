import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MasterSheduleComponent } from './master-shedule.component';

describe('MasterSheduleComponent', () => {
  let component: MasterSheduleComponent;
  let fixture: ComponentFixture<MasterSheduleComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [MasterSheduleComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(MasterSheduleComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
