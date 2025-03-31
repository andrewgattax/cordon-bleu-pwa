import {Component, inject} from '@angular/core';
import {PrimaryButtonComponent} from '../components/primary-button/primary-button.component';
import {NavbarComponent} from '../components/navbar/navbar.component';
import {AuthService} from '../core/services/auth.service';
import {Router, RouterLink} from '@angular/router';
import {MatIcon} from '@angular/material/icon';
import {ProductService} from '../core/services/product.service';
import {CreditsComponent} from '../components/credits/credits.component';

@Component({
  selector: 'app-homepage',
  imports: [
    NavbarComponent,
    MatIcon,
    PrimaryButtonComponent,
    RouterLink,
    CreditsComponent
  ],
  templateUrl: './homepage.component.html',
  styleUrl: './homepage.component.scss'
})
export class HomepageComponent {
  authService = inject(AuthService);
  router = inject(Router);
  productService = inject(ProductService);
  quantita: number = 0;
  contentLoaded: boolean = false;

  ngOnInit(): void {
    this.productService.getTotalAvailability().subscribe({
      next: data => {
        this.quantita = data;
      this.contentLoaded = true;
      }
    })
  }
}
