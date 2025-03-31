import {Component, input, output} from '@angular/core';

@Component({
  selector: 'app-primary-button',
  imports: [],
  templateUrl: './primary-button.component.html',
  styleUrl: './primary-button.component.scss'
})
export class PrimaryButtonComponent {
  text = input.required()
  clickEvent = output()

  handleClick() {
    this.clickEvent.emit();
  }
}
