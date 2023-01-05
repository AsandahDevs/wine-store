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

  clearCart() {
    this.cart = [];
  }

  removeItemFromCart(wine: RecommendedWine) {
    this.cart = this.cart.filter((id) => id !== wine);
  }
}
