import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CKEditorModule } from '@ckeditor/ckeditor5-angular';
import { FileUploadComponent } from './file-upload/file-upload.component';
import { MatInputModule } from '@angular/material/input';
import { MatButtonModule } from '@angular/material/button';
import { FormsModule } from '@angular/forms';
import { MatIconModule } from '@angular/material/icon';
import { ToasterModule } from '../toaster/toaster.module';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    CKEditorModule,
    MatInputModule,
    MatButtonModule,
    MatIconModule,
    ToasterModule
  ],
  declarations: [
    FileUploadComponent
  ],
  exports: [
    FileUploadComponent
  ]
})
export class FileUploaderModule { }
