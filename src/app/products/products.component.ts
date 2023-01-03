import { Component, OnInit } from '@angular/core';
import { RecommendedWine } from '../interface/recommended-wines';
import { Root } from '../interface/root';
import { ProductsService } from '../services/products.service';

@Component({
  selector: 'app-products',
  templateUrl: './products.component.html',
  styleUrls: ['./products.component.scss'],
})
export class ProductsComponent implements OnInit {
  wineList: RecommendedWine[] | undefined;
  constructor(private productsService: ProductsService) {}

  ngOnInit(): void {
    this.productsService.getListOfRecommendedMerlots().subscribe({
      next: (data: Root) => {
        const { recommendedWines } = data;
        this.wineList = recommendedWines;
      },
      error: (error: any) => {
        console.log(error);
      },
    });
  }
}
