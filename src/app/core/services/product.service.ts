import { Injectable } from '@angular/core';
import { ApiService } from './api.service';
import { Observable } from 'rxjs';
import { Product } from '../models/product.model';

@Injectable({
  providedIn: 'root'
})
export class ProductService {
  constructor(private apiService: ApiService) {}

  getAllProducts(): Observable<Product[]> {
    return this.apiService.get<Product[]>('/api/products');
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

  deleteProduct(id: number): Observable<void> {
    return this.apiService.delete<void>(`/api/products/${id}`);
  }
}
