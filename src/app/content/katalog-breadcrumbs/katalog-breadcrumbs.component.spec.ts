import { ComponentFixture, TestBed } from '@angular/core/testing';

import { KatalogBreadcrumbsComponent } from './katalog-breadcrumbs.component';

describe('KatalogBreadcrumbsComponent', () => {
  let component: KatalogBreadcrumbsComponent;
  let fixture: ComponentFixture<KatalogBreadcrumbsComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [KatalogBreadcrumbsComponent]
    });
    fixture = TestBed.createComponent(KatalogBreadcrumbsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
