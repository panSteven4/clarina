export interface ProductModel {
  name: string;
  price: number;
  available: boolean; // na dotaz|skladem|počet ks skladem
  product_code: string;
  description: string;
  image_path: string;
  productCategory: string[];
}
