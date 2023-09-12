import { ComponentFixture, TestBed } from '@angular/core/testing';

import { StrunneComponent } from './strunne.component';

describe('StrunneComponent', () => {
  let component: StrunneComponent;
  let fixture: ComponentFixture<StrunneComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [StrunneComponent],
    });
    fixture = TestBed.createComponent(StrunneComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
