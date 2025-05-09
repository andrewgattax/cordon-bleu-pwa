import { Injectable } from '@angular/core';
import { ApiService } from './api.service';
import {map, Observable} from 'rxjs';
import { Product } from '../models/product.model';

@Injectable({
  providedIn: 'root'
})
export class ProductService {
  constructor(private apiService: ApiService) {}

  getAllProducts(): Observable<Product[]> {
    return this.apiService.get<Product[]>('/api/products');
  }

  // getTotalAvailability(): number {
  //   let totalAvailability = 0;
  //   this.getAllProducts().subscribe({
  //     next: (response) => {
  //       console.log(response);
  //       response.forEach((product) => {
  //         totalAvailability += product.quantity;
  //       });
  //       console.log(totalAvailability);
  //     }
  //   })
  //   return totalAvailability;
  // }

  getTotalAvailability(): Observable<number> {
    return this.getAllProducts().pipe(
      map((products) => products.reduce((total, product) => total + product.quantity, 0))
    );
  }

  getProductById(id: number): Observable<Product> {
    return this.apiService.get<Product>(`/api/products/${id}`);
  }

  createProduct(product: Product): Observable<Product> {
    return this.apiService.post<Product, Product>('/api/products', product);
  }

  updateProduct(id: number, product: Product): Observable<Product> {
    return this.apiService.put<Product, Product>(`/api/products/${id}`, product);
  }

  incrementStock(id: number, quantity: number): void {
    this.getProductById(id).subscribe({
      next: value => {
        value.quantity += quantity
        this.updateProduct(id, value);
      }
    })
  }

  deleteProduct(id: number): Observable<void> {
    return this.apiService.delete<void>(`/api/products/${id}`);
  }
}
