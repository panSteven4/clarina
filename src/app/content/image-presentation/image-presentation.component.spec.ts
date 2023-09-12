import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ImagePresentationComponent } from './image-presentation.component';

describe('ImagePresentationComponent', () => {
  let component: ImagePresentationComponent;
  let fixture: ComponentFixture<ImagePresentationComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [ImagePresentationComponent],
    });
    fixture = TestBed.createComponent(ImagePresentationComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
