import { Injectable } from '@angular/core';
import { ProductModel } from '../models/product.model';

@Injectable({
  providedIn: 'root',
})
export class ShowGalleryService {
  isGalleryVisible: boolean = false;
  current_image_path: string | undefined;
  product: ProductModel | undefined;
  current_index: number | undefined;

  constructor() {}

  showGallery(current_image_path: string, product: ProductModel): void {
    this.isGalleryVisible = true;
    this.current_image_path = current_image_path;
    this.product = product;

    this.current_index = this.findCurrentIndex();
  }

  hideGallery(): void {
    this.isGalleryVisible = false;
  }

  swipeImageLeft(): void {
    this.current_index = this.findCurrentIndex();
    if (this.current_index - 1 >= 0) {
      this.current_index -= 1;
      this.current_image_path = this.product?.image_paths[this.current_index];
    }
  }

  swipeImageRight(): void {
    this.current_index = this.findCurrentIndex();
    if (
      this.product &&
      this.current_index + 1 < this.product?.image_paths.length
    ) {
      this.current_index += 1;
      this.current_image_path = this.product?.image_paths[this.current_index];
    }
  }

  findCurrentIndex(): number {
    if (this.product && this.current_image_path) {
      return this.product?.image_paths.indexOf(this.current_image_path);
    }
    return 0;
  }

  isButtonRightVisible(): boolean {
    return !!(
      this.product &&
      typeof this.current_index !== 'undefined' &&
      this.current_index < this.product.image_paths.length - 1
    );
  }

  isButtonLeftVisible(): boolean {
    return !!(this.product && this.current_index && this.current_index > 0);
  }
}
