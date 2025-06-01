import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TvComputerRepearingComponent } from './tv-computer-repearing.component';

describe('TvComputerRepearingComponent', () => {
  let component: TvComputerRepearingComponent;
  let fixture: ComponentFixture<TvComputerRepearingComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [TvComputerRepearingComponent]
    });
    fixture = TestBed.createComponent(TvComputerRepearingComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
