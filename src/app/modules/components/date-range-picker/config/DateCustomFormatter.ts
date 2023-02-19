import { dataRangeTypeConst } from "../component/date-range-picker/date-range-picker.component";

export class DateCustomFormatter {
    value = dataRangeTypeConst.matMonthPicker;

    constructor() { }

    get display() {
        return this.value == dataRangeTypeConst.matMonthPicker ?
            {
                dateInput: 'MMM YYYY',
                monthYearLabel: 'MMM YYYY',
                dateA11yLabel: 'LL',
                monthYearA11yLabel: 'MMMM YYYY',
            } : {
                dateInput: 'DD/MM/YYYY',
                monthYearLabel: 'MMM YYYY',
                dateA11yLabel: 'DD/MM/YYYY',
                monthYearA11yLabel: 'MMM YYYY',
            }
    }
    get parse() {
        return this.value == dataRangeTypeConst.matMonthPicker ? {
            dateInput: 'MM/YYYY',
        } : {
            dateInput: 'DD/MM/YYYY'
        }
    }

}