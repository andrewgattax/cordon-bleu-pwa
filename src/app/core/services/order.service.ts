import { Injectable } from '@angular/core';
import { ApiService } from './api.service';
import { Observable } from 'rxjs';
import { Order } from '../models/order.model';
import { HttpParams } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class OrderService {
  constructor(private apiService: ApiService) {}

  getUserOrders(): Observable<Order[]> {
    return this.apiService.get<Order[]>('/api/orders');
  }

  getOrderById(id: number): Observable<Order> {
    return this.apiService.get<Order>(`/api/orders/${id}`);
  }

  createOrder(order: Order): Observable<Order> {
    return this.apiService.post<Order, Order>('/api/orders', order);
  }

  cancelOrder(id: number): Observable<void> {
    return this.apiService.delete<void>(`/api/orders/${id}`);
  }

  // Admin methods
  getAllOrders(): Observable<Order[]> {
    return this.apiService.get<Order[]>('/api/admin/orders');
  }

  updateOrderStatus(id: number, isPaid: boolean, isDelivered: boolean): Observable<Order> {
    const params = new HttpParams()
      .set('isPaid', isPaid.toString())
      .set('isDelivered', isDelivered.toString());

    return this.apiService.put<Order, null>(`/api/admin/orders/${id}`, null);
  }
}
