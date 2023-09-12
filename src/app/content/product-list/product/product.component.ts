import { Component, Input, LOCALE_ID } from '@angular/core';
import {
  ProductAvailabilityEnum,
  ProductModel,
} from '../../../models/product.model';
import { CurrencyPipe, registerLocaleData } from '@angular/common';
import localeCs from '@angular/common/locales/cs';

@Component({
  selector: 'app-product',
  templateUrl: './product.component.html',
  styleUrls: ['./product.component.css'],
  providers: [{ provide: LOCALE_ID, useValue: 'cs-CZ' }],
})
export class ProductComponent {
  readonly ProductAvailabilityEnum = ProductAvailabilityEnum;

  @Input() product: ProductModel | undefined;

  isHovered = false;
  constructor() {
    registerLocaleData(localeCs);
  }
  onHover() {
    this.isHovered = true;
  }
  onHoverEnd() {
    this.isHovered = false;
  }

  protected readonly onmouseout = onmouseout;
}
