import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ChipEngCourseComponent } from './chip-eng-course.component';

describe('ChipEngCourseComponent', () => {
  let component: ChipEngCourseComponent;
  let fixture: ComponentFixture<ChipEngCourseComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ChipEngCourseComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(ChipEngCourseComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
