import {AfterViewInit, ChangeDetectorRef, Component, forwardRef, ViewChild} from '@angular/core';
import {ControlValueAccessor, NG_VALUE_ACCESSOR} from '@angular/forms';
import {MagicTextInputComponent} from '../magic-text-input/magic-text-input.component';

@Component({
  selector: 'app-magic-text-input-wrapper',
  templateUrl: './magic-text-input-wrapper.component.html',
  providers: [
    {
      provide: NG_VALUE_ACCESSOR,
      useExisting: forwardRef(() => MagicTextInputWrapperComponent),
      multi: true
    }
  ]
})
export class MagicTextInputWrapperComponent implements ControlValueAccessor, AfterViewInit {

  @ViewChild(MagicTextInputComponent)
  magic: MagicTextInputComponent;

  value: any;
  onChange: any;

  constructor(private changeDetectorRef: ChangeDetectorRef) {
  }

  ngAfterViewInit(): void {
    this.magic.writeValue(this.value);
    this.magic.registerOnChange(this.customOnChange.bind(this));
    this.changeDetectorRef.detectChanges();
  }

  writeValue(value: any): void {
    console.log('Writing value in wrapper "' + value + '"');
    this.value = value;
    if (this.magic) {
      this.magic.writeValue(value);
    }
  }

  registerOnChange(fn: any): void {
    console.log('Assigning on change to wrapper component');
    this.onChange = fn;
  }

  customOnChange(event: any): void {
    console.log('Invoked <3 ' + event);
    // Simulate return of different value than the one returned by the input :-)
    this.onChange(event + '-magic-wrapper');
  }

  registerOnTouched(fn: any): void {
    // Don't care :)
  }
}
