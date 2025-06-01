import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AcFridgeRepearingComponent } from './ac-fridge-repearing.component';

describe('AcFridgeRepearingComponent', () => {
  let component: AcFridgeRepearingComponent;
  let fixture: ComponentFixture<AcFridgeRepearingComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [AcFridgeRepearingComponent]
    });
    fixture = TestBed.createComponent(AcFridgeRepearingComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
