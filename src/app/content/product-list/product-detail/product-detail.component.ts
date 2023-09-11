import {Component, LOCALE_ID, OnInit} from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import {ProductGeneratorService} from "../../../services/product-generator.service";
import {ProductAvailabilityEnum, ProductModel} from "../../../models/product.model";
import {CurrencyPipe, registerLocaleData} from "@angular/common";
import localeCs from "@angular/common/locales/cs";

@Component({
  selector: 'app-product-detail',
  templateUrl: './product-detail.component.html',
  styleUrls: ['./product-detail.component.css'],
  providers: [
    { provide: LOCALE_ID, useValue: 'cs-CZ' }
  ]
})
export class ProductDetailComponent implements OnInit{
  product : ProductModel | undefined;
  products : ProductModel[];
  priceWithoutTax: number = 0;
  current_image_path: string|undefined;
  constructor(private route: ActivatedRoute, private ProductGeneratorService: ProductGeneratorService) {
    this.products = ProductGeneratorService.products;
    registerLocaleData(localeCs);
  }

  ngOnInit() {
    const routeParams = this.route.snapshot.paramMap;
    const productIdFromRoute = Number(routeParams.get("id")); //todo https://angular.io/start/start-routing

    this.product = this.products.find(product => product.id === productIdFromRoute);
    if(this.product != undefined) {
      this.priceWithoutTax = this.product?.price * 0.85;
    }
    this.current_image_path = this.product?.image_paths[0];
  }

  protected readonly ProductAvailabilityEnum = ProductAvailabilityEnum;

  changeMainImage(new_image_path: string): void {
    this.current_image_path = new_image_path;
  }
}
