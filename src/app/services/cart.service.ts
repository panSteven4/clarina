import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root',
})
export class CartService {
  /*TODO
   * 1. metody: add, remove
   * 2. Subject holding state of cart
   * 3. Sync subject with local storage
   * 4. cart component view
   * 5. cart model - productID, amount */

  constructor() {}

  add(productID: number, amount: number = 1) {}

  remove(productID: number, amount: number = 1) {
    //todo: if special number (infinity: number) as amount - remove all
  }
}
