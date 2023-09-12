import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PrislusenstviComponent } from './prislusenstvi.component';

describe('PrislusenstviComponent', () => {
  let component: PrislusenstviComponent;
  let fixture: ComponentFixture<PrislusenstviComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [PrislusenstviComponent],
    });
    fixture = TestBed.createComponent(PrislusenstviComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
