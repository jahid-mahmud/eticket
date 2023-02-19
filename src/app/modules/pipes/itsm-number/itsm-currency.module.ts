import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ItsmNumberPipe } from './itsm-currency.pipe';

@NgModule({
  imports: [
    CommonModule
  ],
  declarations: [ItsmNumberPipe],
  exports: [ItsmNumberPipe]
})
export class ItsmCurrencyModule { }
