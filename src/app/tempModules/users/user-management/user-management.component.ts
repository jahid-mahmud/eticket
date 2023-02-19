import { Component, ElementRef, OnInit, ViewChild, ViewEncapsulation } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { MatPaginator, PageEvent } from '@angular/material/paginator';
import { MatSort } from '@angular/material/sort';
import { MatTableDataSource } from '@angular/material/table';
import { ActivatedRoute, Router } from '@angular/router';
import { UserProfile } from 'app/tempModules/interfaces/user-profile';
import { saveAs } from 'file-saver';
import { fromEvent, of, Subject } from 'rxjs';
import { debounceTime, distinctUntilChanged, map, switchMap, takeUntil } from 'rxjs/operators';
import { UsersService } from '../services/users.service';
import { ToasterService } from "app/modules/toaster/service/toaster.service";
import { MatMenuTrigger } from '@angular/material/menu';
import { trigger, transition, query, style, stagger, animate } from '@angular/animations';
const ELEMENT_DATA: any = [];




@Component({
  selector: 'app-user-management',
  templateUrl: './user-management.component.html',
  styleUrls: ['./user-management.component.scss'],
  animations: [
    trigger('listAnimation', [
      transition('* <=> *', [
        query(':enter',
          [style({ opacity: 0 }), stagger('60ms', animate('600ms ease-out', style({ opacity: 1 })))],
          { optional: true }
        ),
      ])
    ])
  ],
  // encapsulation:ViewEncapsulation.None
})
export class UserManagementComponent implements OnInit {

  public isLoading = false;
  @ViewChild(MatSort) sort: MatSort;
  @ViewChild('paginator') paginator: MatPaginator;
  @ViewChild('menuTrigger') menuTrigger: MatMenuTrigger;

  displayedColumns: string[] = [
    'name',
    'email',
    'investorType',
    'dob',
    'task',
    'status',
    'action',
  ];
  searchText='';
  accountType='';
  newsletter_subscription=''
  current_status='';
  sort_by=''
  pageSize = 10;
  pageIndex = 0;
  userListData: UserProfile[];
  datasources: MatTableDataSource<UserProfile> = new MatTableDataSource<UserProfile>(
    []
  );
  length;
  pageSizeOptions: number[] = [5, 10, 25, 100];
  pageEvent: PageEvent;
  @ViewChild('input') inputRef: ElementRef;
  protected _onDestroy = new Subject<void>();
  constructor(private router: Router, private route: ActivatedRoute, private _dialogue: MatDialog, private usersService: UsersService, private _toasterService: ToasterService,) { }

  ngOnInit(): void {
    this.getUsers();
  }
  getUsers(search = '', size = 10, pageNumber = 1,account_type='',current_status='',newsletter_subscription='',sort_by='') {
    this.isLoading = true;
    this.usersService.getUsers(this.searchText, size, pageNumber,this.accountType,this.current_status,this.newsletter_subscription,this.sort_by).subscribe(data => {
      this.userListData = data.results;
      this.length = data.count;
      this.datasources = new MatTableDataSource<UserProfile>(
        this.userListData
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
  navigateToProfile(userProfile: UserProfile) {
    this.router.navigate(['details', userProfile.user.id], { relativeTo: this.route })
  }
  addUser() {
    this.router.navigate(['add'], { relativeTo: this.route })
  }

  downLoadList() {
    this.usersService.downloadUserList().subscribe((data:any)=>{
      const blob = new Blob([data], { type: 'application/octet-stream' });
      const fileName = 'users.csv';
      saveAs(blob, fileName);
    })

  }
  
  openFilterModal() {
    // this._dialogue.open(UserFilterComponent, {
    //   height: 'auto',
    //   width: '596px',
    //   data: {
    //     'message': "Sure you want to delete this?"
    //   },
    //   panelClass: 'filter-modal'

    // })
  }
  ngAfterViewInit() {
    fromEvent(this.inputRef.nativeElement, 'keyup').pipe(
      takeUntil(this._onDestroy),
      map((evt: any) => evt.target.value),
      debounceTime(1000),
      distinctUntilChanged(),
    ).subscribe((text: string) => {
      this.searchText=text;
      this.getUsers();
    })

  }
  onDestroy() {
    this._onDestroy.next();
    this._onDestroy.complete();

  }

  deleteClientUserProfile(id) {
    // this._dialogue.open(DeleteConfirmComponent, {
    //   height: 'auto',
    //   width: '596px',
    //   data: {
    //     'message': "Sure you want to delete this?"
    //   },
    //   panelClass: 'custom-modalbox'
    // }).afterClosed().pipe(switchMap((value) => {
    //   if (!value) {
    //     return of(false);
    //   }

    //   return this.usersService.deleteClientUserProfile(id)
    // })).subscribe(data => {
    //   if (data) {
    //     this._toasterService.showSnackbarSuccess('User has been deleted successfully', 5000);
    //     this.getUsers();
    //   }
    // }, err => {
    //   if (err.error.message) {
    //     this._toasterService.showSnackbarError(err.error.message, 5000);
    //     return;
    //   }
    //   this._toasterService.showSnackbarError('Something went wrong!', 5000);

    // })
  }
  closeModal($event) {
    this.menuTrigger.closeMenu();
    if($event){
      this.accountType=$event?.account_type??'';
      this.current_status=$event.current_status??'';
      this.newsletter_subscription=$event.newsletter_subscription??'';
      this.sort_by=$event?.sort_by??'';
      this.pageIndex=0;
      this.getUsers('',this.pageSize,this.pageIndex+1,$event.account_type,$event.current_status,$event.newsletter_subscription,$event.sort_by);
    }
    else{
      this.accountType='';
      this.sort_by='';
      this.current_status='';
      this.newsletter_subscription=''
    }
   
  }
  handlePageEvent(pageEvent: PageEvent) {
    const currentPageSize=pageEvent.pageSize;
    this.pageIndex = pageEvent.pageIndex;
    if(currentPageSize!==this.pageSize){
      this.pageIndex=0;
    }
    this.pageSize=currentPageSize;
    this.getUsers('', this.pageSize, this.pageIndex + 1);
  }
}