import { Component } from '@angular/core';
import {ProductGeneratorService} from "../../services/product-generator.service";

@Component({
  selector: 'app-product',
  templateUrl: './product.component.html',
  styleUrls: ['./product.component.css']
})
export class ProductComponent {
  constructor(private ProductGeneratorService: ProductGeneratorService) {

  }

}
