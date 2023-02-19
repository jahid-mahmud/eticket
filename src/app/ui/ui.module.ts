import { NgModule } from '@angular/core';
import { SharedModule } from '../shared/shared.module';
import { GoogleAuthButtonComponent } from './google-auth-button/google-auth-button.component';


@NgModule({
  imports: [
    SharedModule
  ],
  declarations: [
    GoogleAuthButtonComponent
  ],
  exports: [
    GoogleAuthButtonComponent
  ]
})
export class UiModule { }
