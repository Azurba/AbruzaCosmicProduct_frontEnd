import { ComponentFixture, TestBed } from '@angular/core/testing';

import { HatsComponent } from './hats.component';

describe('HatsComponent', () => {
  let component: HatsComponent;
  let fixture: ComponentFixture<HatsComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [HatsComponent]
    });
    fixture = TestBed.createComponent(HatsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
