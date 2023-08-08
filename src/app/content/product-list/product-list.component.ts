import { Component } from '@angular/core';
import {ProductGeneratorService} from "../../services/product-generator.service";
import {ProductModel} from "../../models/product.model";

@Component({
  selector: 'app-product-list',
  templateUrl: './product-list.component.html',
  styleUrls: ['./product-list.component.css']
})
export class ProductListComponent {
  products: ProductModel[] = [];
  constructor(private ProductGeneratorService: ProductGeneratorService) {
    for(let i = 0; i < 12; i++){
      this.products.push(ProductGeneratorService.generateProduct())
    }
  }
}
