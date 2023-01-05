import { Component, OnInit } from '@angular/core';
import { Subscription } from 'rxjs';
import { RecommendedWine } from '../interface/recommended-wines';
import { Root } from '../interface/root';
import { CartService } from '../services/cart.service';
import { ProductsService } from '../services/products.service';

@Component({
  selector: 'app-products',
  templateUrl: './products.component.html',
  styleUrls: ['./products.component.scss'],
})
export class ProductsComponent implements OnInit {
  wineList!: RecommendedWine[];
  merlots$!: Subscription;

  constructor(
    private productsService: ProductsService,
    private cartService: CartService
  ) {}

  ngOnInit(): void {
    this.merlots$ = this.productsService
      .getListOfRecommendedMerlots()
      .subscribe({
        next: (data: Root) => {
          const { recommendedWines } = data;
          this.wineList = recommendedWines;
        },
        error: (error: any) => {
          console.log(error);
        },
      });
  }

  displayCartItems() {
    return this.cartService.cart;
  }

  ngOnDestroy() {
    this.merlots$.unsubscribe();
  }
}
