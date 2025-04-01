import {Component, input, output} from '@angular/core';
import {NgClass} from '@angular/common';

@Component({
  selector: 'app-primary-button',
  imports: [
    NgClass
  ],
  templateUrl: './primary-button.component.html',
  styleUrl: './primary-button.component.scss'
})
export class PrimaryButtonComponent {
  text = input.required()
  disabled = input(false)
  clickEvent = output()

  handleClick() {
    this.clickEvent.emit();
  }
}
