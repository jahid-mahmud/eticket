import { Component, ElementRef, OnInit, ViewChild } from "@angular/core";
import { MatPaginator, PageEvent } from "@angular/material/paginator";
import { MatSort } from "@angular/material/sort";
import { MatTableDataSource } from "@angular/material/table";
import { ActivatedRoute, Router } from "@angular/router";
import { Subject } from "rxjs";
import { MatMenuTrigger } from "@angular/material/menu";
import { LeadSourceService } from "../../services/lead-source.service";
import { ToasterService } from "app/modules/toaster/service/toaster.service";
@Component({
  selector: "app-lead-source-list",
  templateUrl: "./lead-source-list.component.html",
  styleUrls: ["./lead-source-list.component.scss"],
})
export class LeadSourceListComponent implements OnInit {
  public isLoading = false;
  @ViewChild(MatSort) sort: MatSort;
  @ViewChild("paginator") paginator: MatPaginator;
  @ViewChild("menuTrigger") menuTrigger: MatMenuTrigger;

  displayedColumns: string[] = [
    "CreatedBy",
    "CreatedOn",
    "Description",
    "IsActive",
    "SourceId",
    "SourceName",
    "action",
  ];
  searchText = "";
  accountType = "";
  newsletter_subscription = "";
  current_status = "";
  sort_by = "";
  pageSize = 10;
  pageIndex = 0;
  leadSourceList: any[];
  datasources: MatTableDataSource<any> = new MatTableDataSource<any>([]);
  length;
  pageSizeOptions: number[] = [5, 10, 25, 100];
  pageEvent: PageEvent;
  @ViewChild("input") inputRef: ElementRef;
  protected _onDestroy = new Subject<void>();
  constructor(
    private router: Router,
    private route: ActivatedRoute,
    private _service: LeadSourceService,
    private _toasterService: ToasterService,
  ) {}

  ngOnInit(): void {
    this.getLeadSource();
  }
  getLeadSource(search = "", size = 10, pageNumber = 1) {
    this.isLoading = true;
    this._service.getLeadSources(this.searchText, size, pageNumber).subscribe(
      (data) => {
        this.leadSourceList = data;
        this.datasources = new MatTableDataSource<any>(this.leadSourceList);
        this.isLoading = false;
      },
      (err) => {
        this.isLoading = false;
      }
    );
  }

  setPageSizeOptions(setPageSizeOptionsInput: string) {
    if (setPageSizeOptionsInput) {
      this.pageSizeOptions = setPageSizeOptionsInput
        .split(",")
        .map((str) => +str);
    }
  }
  navigateToEdit(id) {
    this.router.navigate(["edit", id], { relativeTo: this.route });
  }
  addLeadSource() {
    this.router.navigate(["add"], { relativeTo: this.route });
  }

  openFilterModal() {}
  ngAfterViewInit() {}
  onDestroy() {
    this._onDestroy.next();
    this._onDestroy.complete();
  }

  deleteLeadSource(id: string) {
    this._service.deleteLeadSources(id).subscribe(res => {
      this._toasterService.showSnackbarSuccess(res)
      this.getLeadSource()
    })
  }
  handlePageEvent(pageEvent: PageEvent) {
    const currentPageSize = pageEvent.pageSize;
    this.pageIndex = pageEvent.pageIndex;
    if (currentPageSize !== this.pageSize) {
      this.pageIndex = 0;
    }
    this.pageSize = currentPageSize;
    this.getLeadSource("", this.pageSize, this.pageIndex + 1);
  }
}
