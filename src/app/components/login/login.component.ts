import { Component } from '@angular/core';
import {InputTextComponent} from '../input-text/input-text.component';
import {PrimaryButtonComponent} from '../primary-button/primary-button.component';

@Component({
  selector: 'app-login',
  imports: [
    InputTextComponent,
    PrimaryButtonComponent
  ],
  templateUrl: './login.component.html',
  styleUrl: './login.component.scss'
})
export class LoginComponent {

}
