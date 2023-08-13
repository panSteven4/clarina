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
  constructor() {
  //   z vysvětlování od sama - checklist
  //   if (!this.product) {
  //     return;
  //   }
  //   const {price, warranty} = this.product;
  //   const foo = price + 'kc';
  //   const foo2 = `cena je ${price * 100}kc`;
  //
  //   const price2 = 20;
  //
  //   const neco = {
  //     ...this.product,
  //       price,
  //   }
  //
  //   const temp = false;
  //
  //   temp && this.funkce(this.product);
  //
  //   if (temp) {
  //     this.funkce2()
  //   }
  //
  // }
  //
  //   funkce({ price }: ProductModel): void {
  //     console.log(price);
  //   }
  //
  //   funkce2(price?: number) {
  //
  }
}
