import { Injectable } from '@angular/core';
import { RecommendedWine } from '../interface/recommended-wines';

@Injectable({
  providedIn: 'root',
})
export class CartService {
  cart: RecommendedWine[] = [];

  addToCart(wine: RecommendedWine) {
    return this.cart.push(wine);
  }

  getItems() {
    return this.cart;
  }
  getNumberOfItemsInCart(): number {
    return this.cart.length;
  }

  // Todo : Add functionality to clear the cart.
  // todo: Add functionality to remove item from cart.
  // todo: Change button text from 'add to cart' to 'remove from cart' when user clicks the cart button.
}
