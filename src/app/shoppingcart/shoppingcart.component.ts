import { Component } from '@angular/core';

import { CartService } from '../services/cart.service';

@Component({
  selector: 'app-shoppingcart',
  templateUrl: './shoppingcart.component.html',
  styleUrls: ['./shoppingcart.component.scss'],
})
export class ShoppingcartComponent {
  constructor(private cartService: CartService) {}

  displayCartItems() {
    return this.cartService.getItems();
  }
}
