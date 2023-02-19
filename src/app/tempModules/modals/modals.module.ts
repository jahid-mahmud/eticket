import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MatDialogModule } from '@angular/material/dialog';
import { MatButtonModule } from '@angular/material/button';
import { FlexLayoutModule } from '@angular/flex-layout';
import { MatIconModule } from '@angular/material/icon';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatSelectModule } from '@angular/material/select';
import { MatInputModule } from '@angular/material/input';
import { MatStepperModule } from '@angular/material/stepper';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { NgxMatIntlTelInputModule } from 'ngx-mat-intl-tel-input';
import { MatCheckboxModule } from '@angular/material/checkbox';
import { MatDatepickerModule } from '@angular/material/datepicker';
import { ToasterModule } from 'app/modules/toaster/toaster.module';
import { MatProgressBarModule } from '@angular/material/progress-bar';
import { MatProgressSpinnerModule } from '@angular/material/progress-spinner';
import { ImageCropperModalComponent } from './image-cropper-modal/image-cropper-modal.component';
import { ImageCropperModule } from 'ngx-image-cropper';
import { MatRadioModule } from '@angular/material/radio';
import { MatButtonToggleModule } from '@angular/material/button-toggle';
import { TranslocoCoreModule } from 'app/core/transloco/transloco.module';
import { ProjectCreateCompleteModalComponent } from './project-create-complete-modal/project-create-complete-modal.component';

@NgModule({
  declarations: [
    ImageCropperModalComponent,
    ProjectCreateCompleteModalComponent,
  ],
  imports: [
    CommonModule,
    MatDialogModule,
    MatButtonModule,
    MatIconModule,
    FlexLayoutModule,
    MatFormFieldModule,
    MatSelectModule,
    MatInputModule,
    MatStepperModule,
    FormsModule,
    ReactiveFormsModule,
    NgxMatIntlTelInputModule,
    MatCheckboxModule,
    MatDatepickerModule,
    ToasterModule,
    MatProgressBarModule,
    MatProgressSpinnerModule,
    ImageCropperModule,
    MatRadioModule,
    MatButtonToggleModule,
    TranslocoCoreModule
  ],
  exports:[],

  entryComponents:[]
})
export class ModalsModule { }
