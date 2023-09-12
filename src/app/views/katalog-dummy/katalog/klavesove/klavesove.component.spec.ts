import { ComponentFixture, TestBed } from '@angular/core/testing';

import { KlavesoveComponent } from './klavesove.component';

describe('KlavesoveComponent', () => {
  let component: KlavesoveComponent;
  let fixture: ComponentFixture<KlavesoveComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [KlavesoveComponent],
    });
    fixture = TestBed.createComponent(KlavesoveComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
