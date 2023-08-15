import { Component, Input } from '@angular/core';
import {ProductAvailabilityEnum, ProductModel} from "../../../models/product.model";


@Component({
  selector: 'app-product',
  templateUrl: './product.component.html',
  styleUrls: ['./product.component.css']
})
export class ProductComponent {
  readonly ProductAvailabilityEnum = ProductAvailabilityEnum;

  @Input() product: ProductModel | undefined;

  isHovered = false;
  constructor() {

  }
  onHover() {
    this.isHovered = true;
  }
  onHoverEnd() {
    this.isHovered = false;
  }

  protected readonly onmouseout = onmouseout;
}
