import { Component, Input } from '@angular/core';
import { RecommendedWine } from '../interface/recommended-wines';
import { CartService } from '../services/cart.service';

@Component({
  selector: 'app-product',
  templateUrl: './product.component.html',
  styleUrls: ['./product.component.scss'],
})
export class ProductComponent {
  @Input() wine: RecommendedWine = {} as RecommendedWine;

  constructor(private cartService: CartService) {}

  addToCart() {
    return this.cartService.addToCart(this.wine);
  }
}
