import {Component, inject, input} from '@angular/core';
import { AuthService } from '../../core/services/auth.service';
import {NgClass, NgOptimizedImage} from '@angular/common';
import {PrimaryButtonComponent} from '../primary-button/primary-button.component';
import {Router, RouterLink} from '@angular/router';
import {MatIcon} from '@angular/material/icon';

@Component({
  selector: 'app-navbar',
  imports: [
    RouterLink,
    MatIcon,
    NgClass
  ],
  templateUrl: './navbar.component.html',
  styleUrl: './navbar.component.scss'
})
export class NavbarComponent {
  authService = inject(AuthService);
  router = inject(Router);
  available = input(false);

  logout() {
    this.authService.logout();
    this.router.navigateByUrl('/login');
  }
}
