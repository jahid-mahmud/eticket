import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FiscalYearComponent } from './fiscal-year.component';
import { MatSelectModule } from '@angular/material/select';



@NgModule({
  declarations: [
    FiscalYearComponent,
  ],
  imports: [
    CommonModule,
    MatSelectModule
  ],
  exports     : [
    FiscalYearComponent
  ]
})
export class FiscalYearModule { }
