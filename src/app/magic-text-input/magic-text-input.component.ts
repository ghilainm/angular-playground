/* tslint:disable:variable-name */
import {ChangeDetectorRef, Component, forwardRef} from '@angular/core';
import {ControlValueAccessor, NG_VALUE_ACCESSOR} from '@angular/forms';

@Component({
  selector: 'app-magic-text-input',
  templateUrl: './magic-text-input.component.html',
  providers: [
    {
      provide: NG_VALUE_ACCESSOR,
      useExisting: forwardRef(() => MagicTextInputComponent),
      multi: true
    }
  ]
})
export class MagicTextInputComponent implements ControlValueAccessor {

  private _value: any;

  constructor(private changeDetectorRef: ChangeDetectorRef) {
  }

  set value(value: any) {
    this._value = value + ' - magic-suffix';
    this.onChange(value);
  }

  get value(): any {
    return this._value;
  }

  onChange = event => {
  }
  onTouched = () => {
  }

  writeValue(value: any): void {
    console.log('Writing value in magic-text ' + value);
    this.value = value;
    if (this.changeDetectorRef) {
      this.changeDetectorRef.markForCheck();
    }
  }

  registerOnChange(fn: any): void {
    console.log('Registering on change in magic-text');
    this.onChange = fn;
  }

  registerOnTouched(fn: any): void {
    this.onTouched = fn;
  }

}
