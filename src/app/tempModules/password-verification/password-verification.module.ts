import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { PasswordVerificationComponent } from './password-verification/password-verification.component';
import { RouterModule, Routes } from '@angular/router';
import { MatButtonModule } from '@angular/material/button';
import { MatIconModule } from '@angular/material/icon';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';
import { FlexLayoutModule } from '@angular/flex-layout';
import { MatButtonToggleModule } from '@angular/material/button-toggle';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';


const ROUTES: Routes = [{ path: '', component: PasswordVerificationComponent }]

@NgModule({
  declarations: [
    PasswordVerificationComponent
  ],
  imports: [
    CommonModule,
    RouterModule.forChild(ROUTES),
    MatButtonModule,
    MatIconModule,
    MatFormFieldModule,
    MatInputModule,
    MatButtonModule,
    FlexLayoutModule,
    MatButtonToggleModule,
    FormsModule,
    ReactiveFormsModule
  ]
})
export class PasswordVerificationModule { }
