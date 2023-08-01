import { Injectable } from '@angular/core';
import {ProductModel} from "../models/product.model";

@Injectable({
  providedIn: 'root'
})
export class ProductGeneratorService {
  products: ProductModel[] = [];
  imagePaths: string[] = [
    "assets/instruments/1.jpg",
    "assets/instruments/2.jpg",
    "assets/instruments/3.jpg",
    "assets/instruments/4.jpg",
    "assets/instruments/5.jpg",
    "assets/instruments/6.jpg",
    "assets/instruments/7.jpg",
    "assets/instruments/8.jpg",
    "assets/instruments/9.jpg",
    "assets/instruments/10.jpg",
    "assets/instruments/11.jpg",
    "assets/instruments/12.jpg",
    "assets/instruments/13.jpg",
    "assets/instruments/14.jpg",
    "assets/instruments/15.jpg",
    "assets/instruments/16.jpg",
    "assets/instruments/17.jpg",
    "assets/instruments/18.jpg",
    "assets/instruments/19.jpg",
    "assets/instruments/20.jpg",
    "assets/instruments/21.jpg",
    "assets/instruments/22.jpg",
    "assets/instruments/23.jpg"
  ]
  categories: string[] = [
    "Dechové nástroje",
    "Smyčcové nástroje",
    "Strunné a drnkací nástroje",
    "Kláveskové nástroje",
    "Noty pro hudební nástroje",
    "Dřevěné",
    "Žesťové",
    "Struny",
    "Pouzdra",
    "Housle",
    "Kontrabasy",
    "Violy",
    "Klarinety",
    "Klávesy"
  ]

  constructor() {
    for(let i = 0; i<100; i++){
      this.products.push(this.generateProduct())
    }
    console.log(this.products);
  }
  generateProduct(): ProductModel{
    return {
      name: this.getRandomString(10,30),
      price: this.getRandomInt(100, 800000),
      available: this.getRandomBoolean(),
      product_code: this.getRandomString(6,8),
      description: this.getRandomString(100, 500),
      image_path: this.getRandomItemFromArray(this.imagePaths),
      productCategory: this.getRandomCategoryArray(this.categories)
    }
  }

  // Random string generator
  getRandomString(min: number, max: number):string {
    let length: number = Math.floor(Math.random() * (max - min)) + min
    let result = '';
    const characters = 'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789';
    const charactersLength = characters.length;
    let counter = 0;
    while (counter < length) {
      result += characters.charAt(Math.floor(Math.random() * charactersLength));
      counter += 1;
    }
    return result;
  }

  getRandomInt(min: number, max: number): number {
    return Math.floor(Math.random() * (max - min)) + min;
  }

  getRandomBoolean():boolean {
    return Math.random() >= 0.5;
  }

  getRandomItemFromArray(array: string[]):string {
    const randomIndex = Math.floor(Math.random() * array.length);
    return array[randomIndex];
  }

  getRandomCategoryArray(categories: string[]){
    let num: number = this.getRandomInt(2,5);
    let result: string[] = [];
    for(let i = 0; i<num; i++){
      result.push(this.getRandomItemFromArray(categories))
    }
    return result;
  }
}
