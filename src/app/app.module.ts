import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { MagicTextInputComponent } from './magic-text-input/magic-text-input.component';
import { SuperFormComponent } from './super-form/super-form.component';
import {FormsModule, ReactiveFormsModule} from '@angular/forms';
import { MagicTextInputWrapperComponent } from './magic-text-input-wrapper/magic-text-input-wrapper.component';

@NgModule({
  declarations: [
    AppComponent,
    MagicTextInputComponent,
    SuperFormComponent,
    MagicTextInputWrapperComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    ReactiveFormsModule,
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
