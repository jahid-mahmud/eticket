import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Paragraph } from './paragraph.pipe';

@NgModule({
  imports: [
    CommonModule
  ],
  declarations: [Paragraph],
  exports: [Paragraph]
})
export class ParagraphModule { }
