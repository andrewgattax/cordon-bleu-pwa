import {Component, inject} from '@angular/core';
import {NavbarComponent} from '../components/navbar/navbar.component';
import {OrderService} from '../core/services/order.service';
import {Order} from '../core/models/order.model';
import {DatePipe} from '@angular/common';
import {PrimaryButtonComponent} from '../components/primary-button/primary-button.component';
import {RouterLink} from '@angular/router';

@Component({
  selector: 'app-ordini',
  imports: [
    NavbarComponent,
    DatePipe,
    PrimaryButtonComponent,
    RouterLink
  ],
  templateUrl: './ordini.component.html',
  styleUrl: './ordini.component.scss'
})
export class OrdiniComponent {
  orderService = inject(OrderService);
  orders: Order[] = []
  isLoaded = false;

  ngOnInit() {
    this.orderService.getUserOrders().subscribe((orders: Order[]) => {
      this.orders = orders;
      this.isLoaded = true;
      console.log(this.orders);
    });
  }
}
