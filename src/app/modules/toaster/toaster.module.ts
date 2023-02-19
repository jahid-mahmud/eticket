import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SnackbarComponent } from './component/snackbar/snackbar.component';
import { FuseAlertModule } from "@fuse/components/alert";
import { ToasterService } from './service/toaster.service';
import { MatSnackBarModule } from '@angular/material/snack-bar';

@NgModule({
  imports: [
    CommonModule,
    FuseAlertModule,
    MatSnackBarModule
  ],
  declarations: [
    SnackbarComponent
  ],
  providers: [ToasterService],
})
export class ToasterModule { }
