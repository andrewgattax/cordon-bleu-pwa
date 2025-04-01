import {Component, inject} from '@angular/core';
import {MatIcon} from '@angular/material/icon';
import {PrimaryButtonComponent} from '../components/primary-button/primary-button.component';
import {ProductService} from '../core/services/product.service';
import {NavbarComponent} from '../components/navbar/navbar.component';
import {OrderService} from '../core/services/order.service';
import {Order} from '../core/models/order.model';
import {Router} from '@angular/router';
import {NgClass} from '@angular/common';

@Component({
  selector: 'app-new-order',
  imports: [
    MatIcon,
    PrimaryButtonComponent,
    NavbarComponent,
    NgClass
  ],
  templateUrl: './new-order.component.html',
  styleUrl: './new-order.component.scss'
})
export class NewOrderComponent {
  disponibility: number = 0;
  quantity: number = 0;
  productService = inject(ProductService);
  orderService = inject(OrderService);
  router = inject(Router);
  isLoaded: boolean = false;

  ngOnInit(): void {
    this.quantity = 0;
    this.productService.getTotalAvailability().subscribe({
      next: data => {
        this.disponibility = data;
        this.isLoaded = true;
      }
    })
  }

  increment() {
    if (this.disponibility > 0) {
      this.disponibility--;
      this.quantity++;
    }
  }

  decrement() {
    if (this.quantity > 0) {
      this.disponibility++;
      this.quantity--;
    }
  }

  placeOrder() {
    let order: Order = {
      quantity: this.quantity,
      delivered: false,
      paid: false,
      productId: 1
    }
    this.orderService.createOrder(order).subscribe({
      next: () => {
        alert("Ordine effettuato!");
        this.router.navigateByUrl('/');
      },
      error: (error) => {
        console.error("Error placing order:", error);
        alert("Failed to place order.");
      }
    });
  }
}
