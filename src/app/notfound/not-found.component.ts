import {Component, inject} from '@angular/core';
import {PrimaryButtonComponent} from '../components/primary-button/primary-button.component';
import {Router} from '@angular/router';

@Component({
  selector: 'app-notfound',
  imports: [
    PrimaryButtonComponent
  ],
  templateUrl: './not-found.component.html',
  styleUrl: './not-found.component.scss'
})
export class NotFoundComponent {
  router = inject(Router);
  redirectHome() {
    this.router.navigateByUrl("/home");
  }
}
