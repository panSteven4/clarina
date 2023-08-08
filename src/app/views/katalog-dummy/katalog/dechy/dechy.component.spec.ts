import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DechyComponent } from './dechy.component';

describe('DechyComponent', () => {
  let component: DechyComponent;
  let fixture: ComponentFixture<DechyComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [DechyComponent]
    });
    fixture = TestBed.createComponent(DechyComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
