import {Component, forwardRef, input, output, signal} from '@angular/core';
import {MatIcon} from '@angular/material/icon';
import {FormsModule, NG_VALUE_ACCESSOR} from '@angular/forms';
import {NgClass} from '@angular/common';

@Component({
  selector: 'app-input-text',
  imports: [
    MatIcon,
    FormsModule,
    NgClass
  ],
  providers: [
    {
      provide: NG_VALUE_ACCESSOR,
      useExisting: forwardRef(() => InputTextComponent),
      multi: true
    }
  ],
  templateUrl: './input-text.component.html',
  styleUrl: './input-text.component.scss'
})
export class InputTextComponent {
  invalid = input(false);
  label = input.required();
  type = input("text")
  icon = input.required()
  name = input.required()
  focused = signal(false);
  onChange: any = () => {};
  onTouched: any = () => {};

  writeValue(value: any): void {
    this.value = value;
  }

  registerOnChange(fn: any): void {
    this.onChange = fn;
  }

  registerOnTouched(fn: any): void {
    this.onTouched = fn;
  }

  setDisabledState(isDisabled: boolean): void {
    this.disabled = isDisabled;
  }

  value: string = "";
  disabled: boolean = false;

  updateValue(event: Event): void {
    const input = event.target as HTMLInputElement;
    this.value = input.value;
    this.onChange(this.value);
    this.onTouched();
  }

  onBlur(): void {
    this.focused.set(false);
  }

  onFocus() {
    this.focused.set(true);
  }

}
