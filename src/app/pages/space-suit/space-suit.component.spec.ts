import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SpaceSuitComponent } from './space-suit.component';

describe('SpaceSuitComponent', () => {
  let component: SpaceSuitComponent;
  let fixture: ComponentFixture<SpaceSuitComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [SpaceSuitComponent]
    });
    fixture = TestBed.createComponent(SpaceSuitComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
