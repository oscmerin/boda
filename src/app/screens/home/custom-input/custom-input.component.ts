import { Component, effect, forwardRef, Input, input } from '@angular/core';
import {
  ControlValueAccessor,
  FormControl,
  NG_VALUE_ACCESSOR,
  ReactiveFormsModule,
} from '@angular/forms';

@Component({
  selector: 'app-custom-input',
  imports: [ReactiveFormsModule],
  templateUrl: './custom-input.component.html',
  styleUrl: './custom-input.component.scss',
  providers: [
    {
      provide: NG_VALUE_ACCESSOR,
      useExisting: forwardRef(() => CustomInputComponent),
      multi: true,
    },
  ],
})
export class CustomInputComponent implements ControlValueAccessor {
  control = input.required<FormControl<any>>();
  @Input() placeholder?: string = '';
  @Input() label?: string = '';
  @Input() type?: string = 'text';

  constructor() {
    effect(() => {
      const currentSignalValue = this.control().value;
      if (this.control().dirty || this.control().touched) {
        const newValue = this.control().value;
        if (currentSignalValue !== newValue) {
          this.onChange(newValue);
        }
      }
    });
  }

  public onChange = (_value: any) => {};
  public onTouched = () => {};

  public writeValue(value: any): void {
    if (value !== this.control().value) {
      this.control().setValue(value, { emitEvent: false });
    }
  }

  public registerOnChange(fn: any): void {
    this.onChange = fn;
  }

  public registerOnTouched(fn: any): void {
    this.onTouched = fn;
  }

  public setDisabledState(isDisabled: boolean): void {
    isDisabled ? this.control().disable() : this.control().enable();
  }

  public handleChange(event: Event): void {
    const target = event.target as HTMLInputElement;
    this.onChange(target.value);
  }

  public handleBlur(): void {
    this.onTouched();
  }
}
