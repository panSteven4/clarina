import { ComponentFixture, TestBed } from '@angular/core/testing';

import { BiciComponent } from './bici.component';

describe('BiciComponent', () => {
  let component: BiciComponent;
  let fixture: ComponentFixture<BiciComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [BiciComponent]
    });
    fixture = TestBed.createComponent(BiciComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
