import { Component, ElementRef, OnInit, ViewChild, ViewEncapsulation } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { MatPaginator, PageEvent } from '@angular/material/paginator';
import { MatSort } from '@angular/material/sort';
import { MatTableDataSource } from '@angular/material/table';
import { ActivatedRoute, Router } from '@angular/router';
import { Subject } from 'rxjs';
import { ToasterService } from "app/modules/toaster/service/toaster.service";
import { MatMenuTrigger } from '@angular/material/menu';
import { ActivityService } from '../../services/activity.service';

@Component({
  selector: 'app-activity-list',
  templateUrl: './activity-list.component.html',
  styleUrls: ['./activity-list.component.scss']
})
export class ActivityListComponent implements OnInit {

  public isLoading = false;
  @ViewChild(MatSort) sort: MatSort;
  @ViewChild('paginator') paginator: MatPaginator;
  @ViewChild('menuTrigger') menuTrigger: MatMenuTrigger;

  displayedColumns: string[] = [
    "CreatedBy",
    "CreatedOn", 
    "ActivityCode",
    "ActivityName",
    "IsActive",
    "Description",
    "action"
  ];
  searchText='';
  accountType='';
  newsletter_subscription=''
  current_status='';
  sort_by=''
  pageSize = 10;
  pageIndex = 0;
  designationList: any[];
  datasources: MatTableDataSource<any> = new MatTableDataSource<any>(
    []
  );
  length;
  pageSizeOptions: number[] = [5, 10, 25, 100];
  pageEvent: PageEvent;
  @ViewChild('input') inputRef: ElementRef;
  protected _onDestroy = new Subject<void>();
  constructor(private router: Router, private route: ActivatedRoute, private _dialogue: MatDialog, private _service: ActivityService, private _toasterService: ToasterService,) { }

  ngOnInit(): void {
    this.getActivities();
  }
  getActivities(search = '', size = 10, pageNumber = 1) {
    this.isLoading = true;
    this._service.getActivitys(this.searchText, size, pageNumber).subscribe(data => {
      this.designationList = data;
      this.datasources = new MatTableDataSource<any>(
        this.designationList
      )
      this.isLoading = false;
    }, err => {
      this.isLoading = false;
    })
  }

  setPageSizeOptions(setPageSizeOptionsInput: string) {
    if (setPageSizeOptionsInput) {
      this.pageSizeOptions = setPageSizeOptionsInput.split(',').map(str => +str);
    }
  }
  navigateToEdit(id) {
    this.router.navigate(['edit',id ], { relativeTo: this.route })
  }
  addActivity() {
    this.router.navigate(['add'], { relativeTo: this.route })
  }
  
  openFilterModal() {
  }
  ngAfterViewInit() {
  }
  onDestroy() {
    this._onDestroy.next();
    this._onDestroy.complete();

  }

  deleteActivity(id:string) {
    this._service.deleteActivity(id).subscribe(res => {
      console.log(res)
      this._toasterService.showSnackbarSuccess(res)
      this.getActivities()
    })
  }
  handlePageEvent(pageEvent: PageEvent) {
    const currentPageSize=pageEvent.pageSize;
    this.pageIndex = pageEvent.pageIndex;
    if(currentPageSize!==this.pageSize){
      this.pageIndex=0;
    }
    this.pageSize=currentPageSize;
    this.getActivities('', this.pageSize, this.pageIndex + 1);
  }
}
