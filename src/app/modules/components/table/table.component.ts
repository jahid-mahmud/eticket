import {
  Component,
  ContentChild,
  EventEmitter,
  Input,
  OnChanges,
  OnInit,
  Output,
  SimpleChanges,
  TemplateRef,
  ViewChild,
  ViewEncapsulation,
} from "@angular/core";
import { MatPaginator, PageEvent } from "@angular/material/paginator";

export const DEFAULT_TABLE_LENGTH = 20;

export interface TemplateConfig {
  key: string;
  title: string;
  cellTemplate?: TemplateRef<any>;
  headerTemplate?: TemplateRef<any>;
  classes?: string;
  headerCellClass?: string;
}

export interface TableConfig {
  totalDataLength?: number;
  itemsPerPage?: number;
  pageSizeOptions?: string[];
  templateConfig?: TemplateConfig[];
  paginator?: MatPaginator;
}

@Component({
  selector: "app-table",
  templateUrl: "./table.component.html",
  styleUrls: ["./table.component.scss"],
  encapsulation: ViewEncapsulation.None
})
export class TableComponent implements OnInit, OnChanges {

  @Input() data: any;
  @Input() defaultNullValue: any = "";
  @Input() isLoading: boolean;
  @Input() tableConfig: TableConfig;
  @Input() hasPagination: boolean;
  @Input() textCenter: Boolean = false;
  @Input() isCellClickable: boolean = false;

  displayedColumns: any[] = [];

  isInitialData: boolean = false;


  @Output() onPaginate: EventEmitter<any> = new EventEmitter();
  @Output('onRowClick') onRowClick: EventEmitter<any> = new EventEmitter(); 

  @ViewChild('paginator', { static: false }) paginator: MatPaginator;
  
  constructor() { }

  ngOnChanges(changes: SimpleChanges): void {
    this.renderTemplate();

    if (changes.isLoading) {
      this.isLoading = changes.isLoading.currentValue;
    }

    if (changes.data?.currentValue?.length) {
      if (!this.isInitialData && changes.data.currentValue?.length < 11) {
        this.hasPagination = false;
      }
      this.isInitialData = true;
    }
    
    if (this.hasPagination) {
      this.tableConfig.paginator = this.paginator;
    }

  }

  renderTemplate() {
    this.displayedColumns = [];
    this.tableConfig.templateConfig.forEach((item) => {
      this.displayedColumns.push(item.key);
    });
  }

  ngOnInit() {
    this.renderTemplate();
  }

  public onClickRow(event: any, data: any, key): void {
    
    if (!this.isCellClickable) return;

      let emitData = {
        data,
        cell: {
          key,
          value: data[key]
        }
      };
      this.onRowClick.emit(emitData);

  }

  onPageChange(event: PageEvent) {
    this.onPaginate.emit(event);
  }
}
