import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { FlexLayoutModule } from '@angular/flex-layout';
import { AngularMaterialModule } from './angular-material.module';
import { ModalsModule } from 'app/tempModules/modals/modals.module';

const SharedModules = [
    CommonModule,
    FormsModule,
    ReactiveFormsModule,
    AngularMaterialModule,
    FlexLayoutModule
]
@NgModule({
    imports: SharedModules,
    exports: SharedModules
})
export class SharedModule {
}
