import { ComponentFixture, TestBed } from '@angular/core/testing';

import { HardwareNetworkingCourseComponent } from './hardware-networking-course.component';

describe('HardwareNetworkingCourseComponent', () => {
  let component: HardwareNetworkingCourseComponent;
  let fixture: ComponentFixture<HardwareNetworkingCourseComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [HardwareNetworkingCourseComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(HardwareNetworkingCourseComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
