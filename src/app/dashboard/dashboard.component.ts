import {Component, inject} from '@angular/core';
import {NavbarComponent} from "../components/navbar/navbar.component";
import {PrimaryButtonComponent} from "../components/primary-button/primary-button.component";
import {RouterLink} from "@angular/router";
import {MatIcon} from '@angular/material/icon';
import {OrderService} from '../core/services/order.service';
import {ProductService} from '../core/services/product.service';

@Component({
  selector: 'app-dashboard',
    imports: [
        MatIcon,
        NavbarComponent,
        PrimaryButtonComponent,
        RouterLink
    ],
  templateUrl: './dashboard.component.html',
  styleUrl: './dashboard.component.scss'
})
export class DashboardComponent {
  orderService = inject(OrderService);
  productService = inject(ProductService);

  quantita = 0;
  ordiniInSospeso = 0;
  quantitaLoaded = false;
  ordiniLoaded = false;
  contentLoaded = this.quantitaLoaded && this.ordiniLoaded;

  ngOnInit(){
    this.productService.getTotalAvailability().subscribe({
      next: value => {
        this.quantita = value;
        this.quantitaLoaded = true;
      }
    })
    this.orderService.getAllOrders().subscribe({
      next: value => {
        for (let order of value) {
          if(!order.delivered) {
            this.ordiniInSospeso++;
          }
        }
        this.ordiniLoaded = true;
      }
    })
  }
}
