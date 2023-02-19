import { AfterViewInit, ChangeDetectionStrategy, ChangeDetectorRef, Component, ElementRef, EventEmitter, Input, OnChanges, OnDestroy, OnInit, Output, SimpleChanges, TemplateRef, ViewChild, ViewEncapsulation } from '@angular/core';
import { ToasterService } from 'app/modules/toaster/service/toaster.service';

@Component({
  selector: 'app-file-upload',
  templateUrl: './file-upload.component.html',
  styleUrls: ['./file-upload.component.scss'],
  encapsulation: ViewEncapsulation.None,
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class FileUploadComponent implements OnInit, OnChanges, AfterViewInit, OnDestroy {
  FILES = {}
  counter = 0;
  draggedClass = false;
  emptyClass = false;

  @Input() selectedImage = null;
  @Input() imgUrl: any = "";
  @Output() onSelect: EventEmitter<any> = new EventEmitter();
  @Output() onCancel: EventEmitter<any> = new EventEmitter();

  @ViewChild('hiddenInput') hiddenInput: ElementRef<any>;

  constructor(
    private cdRef: ChangeDetectorRef,
    private _toasterService: ToasterService
    ) { }

  ngOnInit() {
  }

  ngAfterViewInit(): void {
  }

  ngOnChanges(changes: SimpleChanges): void {

    if (changes.imgUrl?.currentValue) {
      this.emptyClass = true;
    } else {
      this.emptyClass = false;
      this.imgUrl = "";
      this.selectedImage = null;
      if (this.hiddenInput?.nativeElement?.value) {
        this.hiddenInput.nativeElement.value = "";
      }
    }
  }

  onClickCancel() {
    this.selectedImage = null;
    this.imgUrl = "";
    this.onCancel.emit(true);
  }

  // reset counter and append file to gallery when file is dropped
  dropHandler(ev) {
    ev.preventDefault();
    for (const file of ev.dataTransfer.files) {
      setTimeout(() => {
        this.addFile(file);
        this.draggedClass = false;
        this.counter = 0;
      }, 300);
    }
  }

  // only react to actual files being dragged
  dragEnterHandler(e) {
    e.preventDefault();
    if (!this.hasFiles(e)) {
      return;
    }
    ++this.counter && (this.draggedClass = true);
  }

  dragLeaveHandler(e) {
    1 > --this.counter && (this.draggedClass = false);
  }

  dragOverHandler(e) {
    if (this.hasFiles(e)) {
      e.preventDefault();
    }
  }


  hasFiles({ dataTransfer: { types = [] } }) {
    return types.indexOf("Files") > -1;
  }


  onChangeHiddenInput(e) {
    let files = (<HTMLInputElement>e.target).files;

    if (files.length < 1) return;

    let length = files.length > 0 ? files.length - 1 : 0;

    this.addFile(files[length]);

  }

  addFile(file) {
    
    if (file.type.match(/image\/*/) == null) return;

    let size = file.size > 0 ? ((file.size / 1024) / 1024) : 0; 
    if (size > 2) {
      this.hiddenInput.nativeElement.value = '';
      return this._toasterService.showSnackbarError('File size should not be greater than 2 mb', 3000);
    }

    this.selectedImage = file;
    this.imgUrl = "";

    var reader = new FileReader();
    reader.readAsDataURL(file);
    reader.onload = (_event) => {
      this.imgUrl = _event.target.result;
      this.cdRef.detectChanges();
    }

    this.emptyClass = true;

    this.onSelect.emit(this.selectedImage);
  }

  onClickUploadFile() {
    document.getElementById("hidden-input").click();
  }

  ngOnDestroy() {
  }

}
