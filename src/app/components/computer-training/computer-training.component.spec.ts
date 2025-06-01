import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ComputerTrainingComponent } from './computer-training.component';

describe('ComputerTrainingComponent', () => {
  let component: ComputerTrainingComponent;
  let fixture: ComponentFixture<ComputerTrainingComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [ComputerTrainingComponent]
    });
    fixture = TestBed.createComponent(ComputerTrainingComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
