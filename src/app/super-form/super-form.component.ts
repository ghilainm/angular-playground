import { Component, OnInit } from '@angular/core';
import {FormBuilder, FormGroup} from '@angular/forms';

@Component({
  selector: 'app-super-form',
  templateUrl: './super-form.component.html'
})
export class SuperFormComponent implements OnInit {

  superForm: FormGroup;

  constructor(private fb: FormBuilder) {}

  ngOnInit(): void {
    this.superForm = this.fb.group({
      'magic-input': ['Default value'],
      'magic-input-wrapper': ['Wrapper'],
    });
  }

  onSubmit(): void {
    console.log(this.superForm.value);
  }

  reset(): void {
    this.superForm.reset();
    console.log(this.superForm.value);
  }

}
