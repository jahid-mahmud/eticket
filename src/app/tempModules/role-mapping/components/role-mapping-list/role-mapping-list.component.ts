import { Component, ElementRef, OnInit, ViewChild } from '@angular/core';
import { MatPaginator, PageEvent } from '@angular/material/paginator';
import { MatSort } from '@angular/material/sort';
import { MatTableDataSource } from '@angular/material/table';
import { ActivatedRoute, Router } from '@angular/router';
import { Subject } from 'rxjs';
import { MatMenuTrigger } from '@angular/material/menu';
import { RoleMappingService } from '../../services/role-mapping.service';
import { DesignationService } from 'app/tempModules/designation/services/designation.service';
import { ToasterService } from 'app/modules/toaster/service/toaster.service';

@Component({
  selector: 'app-role-mapping-list',
  templateUrl: './role-mapping-list.component.html',
  styleUrls: ['./role-mapping-list.component.scss']
})
export class RoleMappingListComponent implements OnInit {

  public isLoading = false;
  @ViewChild(MatSort) sort: MatSort;
  @ViewChild('paginator') paginator: MatPaginator;
  @ViewChild('menuTrigger') menuTrigger: MatMenuTrigger;


  
  displayedColumns: string[] = [
    "CreatedBy",
    "CreatedOn", 
    "ActivityId",
    "IsActive",
    "RoleMappingId",
    "DesignationId",
    "action"
  ];
  searchText='';
  accountType='';
  newsletter_subscription=''
  current_status='';
  sort_by=''
  pageSize = 10;
  pageIndex = 0;
  ActivityRoleMappingList: any[];
  datasources: MatTableDataSource<any> = new MatTableDataSource<any>(
    []
  );
  length;
  pageSizeOptions: number[] = [5, 10, 25, 100];
  pageEvent: PageEvent;
  @ViewChild('input') inputRef: ElementRef;
  protected _onDestroy = new Subject<void>();
  designatinList: any [] = [];
  constructor(
    private router: Router, 
    private route: ActivatedRoute,
    private _service: RoleMappingService,
    private _designationService:DesignationService,
    private _toasterService: ToasterService,
    ) { }

  ngOnInit(): void {
    this._getActivityRoleMappings();
    // this._get_designations()
  }
  _getActivityRoleMappings(search = '', size = 10, pageNumber = 1) {
    this.isLoading = true;
    this._service.getRoleMappings(this.searchText, size, pageNumber).subscribe(data => {
      this.ActivityRoleMappingList = data;
      this.datasources = new MatTableDataSource<any>(
        this.ActivityRoleMappingList
      )
      this._designationService.getDesignations().subscribe(res=> {
        this.designatinList = res
        this.isLoading = false;
      })
      
    }, err => {
      this.isLoading = false;
    })
  }
  _get_designations() {
    this._designationService.getDesignations().subscribe(res=> {
      this.designatinList = res
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
  addRoles() {
    this.router.navigate(['add'], { relativeTo: this.route })
  }
  getDesignationName(id:string) {
   if(this.designatinList && this.designatinList.length) {
    let item = this.designatinList.find(i => i.DesignationId === id)
    return item && item.DesignationName
   }
  }
  
  openFilterModal() {
  }
  ngAfterViewInit() {
  }
  onDestroy() {
    this._onDestroy.next();
    this._onDestroy.complete();

  }

  deleteRoles(id:string) {
    // console.log(designation)
    // designation.IsActive = 0
    this._service.deleteRoleMapping(id).subscribe(res => {
      this._toasterService.showSnackbarSuccess(res)
      this._getActivityRoleMappings()
    })
  }
  handlePageEvent(pageEvent: PageEvent) {
    const currentPageSize=pageEvent.pageSize;
    this.pageIndex = pageEvent.pageIndex;
    if(currentPageSize!==this.pageSize){
      this.pageIndex=0;
    }
    this.pageSize=currentPageSize;
    this._getActivityRoleMappings('', this.pageSize, this.pageIndex + 1);
  }
}

