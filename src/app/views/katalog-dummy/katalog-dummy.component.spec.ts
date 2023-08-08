import { ComponentFixture, TestBed } from '@angular/core/testing';

import { KatalogDummyComponent } from './katalog-dummy.component';

describe('KatalogDummyComponent', () => {
  let component: KatalogDummyComponent;
  let fixture: ComponentFixture<KatalogDummyComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [KatalogDummyComponent]
    });
    fixture = TestBed.createComponent(KatalogDummyComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
