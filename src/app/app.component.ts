import { Component } from '@angular/core';
import { CartService } from './services/cart.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
})
export class AppComponent {
  title = 'Jolinkomo Wines';
  constructor(private cartService: CartService) {}

  getCartQuantity = (): number => {
    return this.cartService.getNumberOfItemsInCart();
  };
}
