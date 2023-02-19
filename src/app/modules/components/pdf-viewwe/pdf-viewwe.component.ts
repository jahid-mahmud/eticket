import { ChangeDetectorRef, Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-pdf-viewer',
  templateUrl: './pdf-viewwe.component.html',
  styleUrls: ['./pdf-viewwe.component.scss']
})
export class PdfViewerComponent implements OnInit {
  @Input() pdfSrc : string = ''
  
  constructor(
    private ref: ChangeDetectorRef
  ) { }

  ngOnInit(): void {
  }

}
