import { Component, EventEmitter, OnInit, Output } from '@angular/core';

@Component({
  selector: 'app-fiscal-year',
  templateUrl: './fiscal-year.component.html',
  styleUrls: ['./fiscal-year.component.scss']
})
export class FiscalYearComponent implements OnInit {
  @Output() selectedFiscalYear = new EventEmitter<any>();
  currentYear = new Date().getFullYear()
  currentFiscalYear : string
  yearList:any[]= []
  constructor() { }

  ngOnInit(): void {
    this._createFiscalYearList()
  }
  private _createFiscalYearList() {
    let year = this.currentYear;
    this.currentFiscalYear = this.getPreviousYear(year)+'-'+year
    for(let i=0;i<10;i++) {
      this.yearList.push({
        value:this._getFiscalStartDate(this.getPreviousYearValue(year))+'-'+this._getFiscalEndDate(year),
        viewValue:this.getPreviousYear(year)+'-'+year,
      })
      year--
    }
  }

  getPreviousYear(currentyear) {
    return currentyear-1
  }
  getPreviousYearValue(currentyear) {
    return currentyear
  }

  private _getFiscalStartDate(year) {
    return new Date(year,6,1);
  }

  private _getFiscalEndDate(year) {
    var date = new Date(year,5,30);
    date.setHours(23,59,59,999);
    return date
  }

  onSelectfiscalYear(value) {
    let years = value.split('-')
    this.selectedFiscalYear.emit({
       startDate:years[0],
       endDate:years[1]
    })
  }

}
