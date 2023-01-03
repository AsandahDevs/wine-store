import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Root } from '../interface/root';

@Injectable({
  providedIn: 'root',
})
export class ProductsService {
  constructor(private http: HttpClient) {}

  getListOfRecommendedMerlots(): Observable<Root> {
    return this.http.get<Root>(
      'https://api.spoonacular.com/food/wine/recommendation?apiKey=e370643f9cc84d8fa784df785c16311d&wine=merlot&number=15'
    );
  }
}
