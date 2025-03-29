import {Component, input} from '@angular/core';
import {MatIcon} from '@angular/material/icon';

@Component({
  selector: 'app-input-text',
  imports: [
    MatIcon
  ],
  templateUrl: './input-text.component.html',
  styleUrl: './input-text.component.scss'
})
export class InputTextComponent {
  label = input.required()
  type = input("text")
  icon = input.required()
}
