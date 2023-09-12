import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SmycceComponent } from './smycce.component';

describe('SmycceComponent', () => {
  let component: SmycceComponent;
  let fixture: ComponentFixture<SmycceComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [SmycceComponent],
    });
    fixture = TestBed.createComponent(SmycceComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
