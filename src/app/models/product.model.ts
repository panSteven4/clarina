export interface ProductModel {
  name: string;
  price: number;
  available: ProductAvailabilityEnum; // na dotaz|skladem|počet ks skladem
  product_code: string;
  description: string;
  image_path: string;
  warranty: number;
  price_per: ProductPricePerEnum;
  productCategory: string[];
}

export enum ProductPricePerEnum {
  Piece = 'ks',
  Set = 'sada',
}

export enum ProductAvailabilityEnum {
  Inquiry,
  UnderFive,
  Available
}
