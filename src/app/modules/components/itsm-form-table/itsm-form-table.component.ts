import { Component, Input, OnInit, TemplateRef } from '@angular/core';
import { FormArray, FormGroup } from '@angular/forms';


export interface TemplateConfig {
  control: string;
  title: string;
  cellTemplate?: TemplateRef<any>;
  headerTemplate?: TemplateRef<any>;
  classes?: string;
  headerCellClass?: string;
}

export interface FormTableConfig {
  totalDataLength?: number;
  itemsPerPage?: number;
  pageSizeOptions?: string[];
  templateConfig?: TemplateConfig[];
}

@Component({
  selector: 'itsm-form-table',
  templateUrl: './itsm-form-table.component.html',
  styleUrls: ['./itsm-form-table.component.scss']
})
export class ItsmFormTableComponent implements OnInit {

  @Input() tableConfig: FormTableConfig;
  @Input() form: FormGroup;
  @Input() formArrayName: string;
  @Input() textCenter: Boolean = false;
  @Input() disabled: boolean = false;
  @Input() footerTemplate: TemplateRef<any>;
  
  constructor() { }

  ngOnInit() {
  }

}
