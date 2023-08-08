import { ComponentFixture, TestBed } from '@angular/core/testing';

import { KatalogComponent } from './katalog.component';

describe('KatalogComponent', () => {
  let component: KatalogComponent;
  let fixture: ComponentFixture<KatalogComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [KatalogComponent]
    });
    fixture = TestBed.createComponent(KatalogComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
