import { Injectable } from '@angular/core';
import {ProductModel} from "../models/product.model";

@Injectable({
  providedIn: 'root'
})
export class ShowGalleryService {
  isGalleryVisible: boolean = false;
  current_image_path: string|undefined;
  product: ProductModel|undefined;

  constructor() { }

  showGallery(current_image_path: string, product: ProductModel): void {
    this.isGalleryVisible = true;
    this.current_image_path = current_image_path;
    this.product = product;
  }

  hideGallery(): void  {
    this.isGalleryVisible = false;
  }
}
