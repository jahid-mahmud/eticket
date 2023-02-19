import { Component, ElementRef, OnInit, ViewChild } from '@angular/core';
import { MatPaginator, PageEvent } from '@angular/material/paginator';
import { MatSort } from '@angular/material/sort';
import { MatTableDataSource } from '@angular/material/table';
import { ActivatedRoute, Router } from '@angular/router';
import { Subject } from 'rxjs';
import { MatMenuTrigger } from '@angular/material/menu';
import { MessageService } from '../../services/message.service';
import { ToasterService } from 'app/modules/toaster/service/toaster.service';

@Component({
  selector: 'app-message-list',
  templateUrl: './message-list.component.html',
  styleUrls: ['./message-list.component.scss']
})
export class MessageListComponent implements OnInit {

  public isLoading = false;
  @ViewChild(MatSort) sort: MatSort;
  @ViewChild('paginator') paginator: MatPaginator;
  @ViewChild('menuTrigger') menuTrigger: MatMenuTrigger;


  
  displayedColumns: string[] = [
    "CreatedBy",
    "CreatedOn", 
    "Name",
    "IsActive",
    "StatusCode",
    "DisplayText",
    "action"
  ];
  searchText='';
  accountType='';
  newsletter_subscription=''
  current_status='';
  sort_by=''
  pageSize = 10;
  pageIndex = 0;
  messageList: any[];
  datasources: MatTableDataSource<any> = new MatTableDataSource<any>(
    []
  );
  length;
  pageSizeOptions: number[] = [5, 10, 25, 100];
  pageEvent: PageEvent;
  @ViewChild('input') inputRef: ElementRef;
  protected _onDestroy = new Subject<void>();
  constructor(
    private router: Router, 
    private route: ActivatedRoute,
    private _service: MessageService,
    private _toasterService: ToasterService,
    ) { }

  ngOnInit(): void {
    this.getAllMessages();
  }
  getAllMessages(search = '', size = 10, pageNumber = 1) {
    this.isLoading = true;
    this._service.getMessage(this.searchText, size, pageNumber).subscribe(data => {
      this.messageList = data;
      this.datasources = new MatTableDataSource<any>(
        this.messageList
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
  addMessage() {
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

  deleteLeadSource(id:string) {
    this._service.deleteMessage(id).subscribe(res => {
      this._toasterService.showSnackbarSuccess(res)
      this.getAllMessages()
    })
  }
  handlePageEvent(pageEvent: PageEvent) {
    const currentPageSize=pageEvent.pageSize;
    this.pageIndex = pageEvent.pageIndex;
    if(currentPageSize!==this.pageSize){
      this.pageIndex=0;
    }
    this.pageSize=currentPageSize;
    this.getAllMessages('', this.pageSize, this.pageIndex + 1);
  }
}
