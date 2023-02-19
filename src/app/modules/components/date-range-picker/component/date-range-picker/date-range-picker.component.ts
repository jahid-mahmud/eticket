import { Component, EventEmitter, Inject, Input, OnChanges, OnInit, Output, SimpleChanges } from '@angular/core';
import { DefaultSelectedDate } from 'app/core/config/system.config';
import { dateRangeFormat, dateReturnTypeEum, durationTypeRanges, durationTypeRangesByHour, ranges } from '../../config/date-ranges';

import { MatDatepicker, MatDatepickerInputEvent } from '@angular/material/datepicker';
import * as _moment from 'moment';
// tslint:disable-next-line:no-duplicate-imports
import { default as _rollupMoment, Moment } from 'moment';
import { FormControl } from '@angular/forms';
import { MAT_DATE_FORMATS } from '@angular/material/core';
import { DateCustomFormatter } from '../../config/DateCustomFormatter';

const moment = _rollupMoment || _moment;


export const dataRangeTypeConst = {
  matDatePicker: 'matDatePicker',
  rangePicker: 'rangePicker',
  matMonthPicker: 'matMonthPicker'
}
@Component({
  selector: 'app-date-range-picker',
  templateUrl: './date-range-picker.component.html',
  styleUrls: ['./date-range-picker.component.scss'],
})
export class DateRangePickerComponent implements OnInit, OnChanges {

  @Input() dataRangeType;
  matDate = new FormControl(moment());

  dateRanges = Object.keys(ranges);
  selected: any;
  @Input() selectedDate: any;

  @Input() dateReturnType = dateReturnTypeEum.Duration;
  @Input() label: string = "";
  @Input() required : boolean = false
  @Input() returnFormat: string = "YYYY-MM-DD";
  @Input() min: Date;
  @Input() max: Date;
  @Input() disabled: boolean = false;
  @Output() onDateRangeChange = new EventEmitter<any>();

  constructor(@Inject(MAT_DATE_FORMATS) public config: DateCustomFormatter) {


  }
  ngOnChanges(changes: SimpleChanges): void {
    this.changeDetect();
  }

  ngOnInit(): void {
    this.changeDetect();
  }

  changeDetect() {

    //mapping dateRanges to the array 
    if (this.dateReturnType === dateReturnTypeEum.MomentObject) {
      this.dateRanges = Object.keys(ranges);
    }
    else if (this.dateReturnType === dateReturnTypeEum.Hours) {
      this.dateRanges = Object.keys(durationTypeRangesByHour);
    }
    else {
      this.dateRanges = Object.keys(durationTypeRanges);
    }

    //set default value
    this.config.value = this.dataRangeType;
    if (this.dataRangeType === dataRangeTypeConst.matMonthPicker || this.dataRangeType === dataRangeTypeConst.matDatePicker) {
      if (this.dataRangeType === dataRangeTypeConst.matMonthPicker) {
        this.matDate.setValue(moment(this.selectedDate));
      }
      else {
        this.matDate.setValue(moment(this.selectedDate, this.returnFormat));
      }
    }
    else {
      this.selected = this.dateRanges[this.selectedDate && this.selectedDate.value] || this.dateRanges[0];

    }
  }

  dateRangeChanged($event) {

    if (this.dateReturnType === dateReturnTypeEum.MomentObject) {
      const dateFromMoment = {
        momentObject: ranges[$event.value],
        value: [ranges[$event.value][0].format(dateRangeFormat), ranges[$event.value][1].format(dateRangeFormat)]
      }
      this.onDateRangeChange.emit(dateFromMoment);
    }
    else if (this.dateReturnType === dateReturnTypeEum.Hours) {
      this.onDateRangeChange.emit({
        ...durationTypeRangesByHour[$event.value]
      });
    }
    else {
      this.onDateRangeChange.emit({
        ...durationTypeRanges[$event.value]
      });
    }

  }


  chosenYearHandler(normalizedYear: Moment) {
    return;
  }

  chosenMonthHandler(normalizedMonth: Moment, datepicker: MatDatepicker<Moment>) {
    this.matDate.setValue(normalizedMonth);
    datepicker.close();

    this.onDateRangeChange.emit(`${normalizedMonth.format("YYYY/MM")}/01`);

  }
  chosenDateHandler(type, normalizedDate: MatDatepickerInputEvent<Moment>) {
    this.matDate.setValue(normalizedDate.value);

    this.onDateRangeChange.emit(`${normalizedDate.value.format(this.returnFormat)}`);

  }

}
