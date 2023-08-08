import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DarkyComponent } from './darky.component';

describe('DarkyComponent', () => {
  let component: DarkyComponent;
  let fixture: ComponentFixture<DarkyComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [DarkyComponent]
    });
    fixture = TestBed.createComponent(DarkyComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
