import { Component, Input, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'itsm-header-bar',
  templateUrl: './header-bar.component.html',
  styleUrls: ['./header-bar.component.scss']
})
export class HeaderBarComponent implements OnInit {

  @Input('hasBackBtn') hasbackBtn: boolean = true;
  @Input('backUrl') backUrl: string = "";
  @Input('title') title: string = "";
  @Input('showBreadcrumbs') showBreadcrumbs: boolean = false;
  @Input('breadcrumbs') breadcrumbs: any[] = [];

  constructor(
    private _router: Router
  ) { }

  ngOnInit() {
  }

  public onClickBack(): void {

    if (!this.backUrl) {
      history.back();
    }

    this._router.navigateByUrl(this.backUrl);

  }

}
