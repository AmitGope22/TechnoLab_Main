import { ComponentFixture, TestBed } from '@angular/core/testing';

import { WebDesignCourseComponent } from './web-design-course.component';

describe('WebDesignCourseComponent', () => {
  let component: WebDesignCourseComponent;
  let fixture: ComponentFixture<WebDesignCourseComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [WebDesignCourseComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(WebDesignCourseComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
