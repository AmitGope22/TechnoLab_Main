import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MobileRepearingComponent } from './mobile-repearing.component';

describe('MobileRepearingComponent', () => {
  let component: MobileRepearingComponent;
  let fixture: ComponentFixture<MobileRepearingComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [MobileRepearingComponent]
    });
    fixture = TestBed.createComponent(MobileRepearingComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
