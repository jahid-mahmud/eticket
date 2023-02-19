import { DateViewFormatEnum } from 'app/core/config/system.config';
import moment from 'moment';


export const dateRangeFormat = "YYYY-MM-DD HH:mm:ss"
export const dateRangeFormat2 = "YYYY-MM-DD"

export const dateReturnTypeEum = {
    Duration: "Duration",
    Hours: "Hours",
    MomentObject: "MomentObject"
}
export interface IDurationType {
    value: number,
    duration: number;
}

export const durationTypeRangesByHour: any = {
    'Last Hour': {
        value: 0,
        duration: 1
    },
    'Last 6 Hour': {
        value: 1,
        duration: 6
    },
    'Last 12 Hours': {
        value: 2,
        duration: 12
    },
    'Last 24 Hours': {
        value: 3,
        duration: 24
    },
    'Last 48 Hours': {
        value: 4,
        duration: 48
    },
    'Last 72 Hours': {
        value: 5,
        duration: 72
    },
}

export const durationTypeRanges: any = {
    'Last 7 Days': {
        value: DateViewFormatEnum.Date,
        duration: 7
    },
    'Last 30 Days': {
        value: DateViewFormatEnum.Week,
        duration: 30
    },
    'Last 6 Months': {
        value: DateViewFormatEnum.Month,
        duration: 180
    },
    'Last 12 Months': {
        value: DateViewFormatEnum.Quarter,
        duration: 365
    },
}

export const ranges: any = {
    'Last 7 Days': [moment().subtract(6, 'days'), moment()],
    'Last 30 Days': [moment().subtract(29, 'days'), moment()],
    'This Month': [moment().startOf('month'), moment().endOf('month')],
    'Last Month': [moment().subtract(1, 'month').startOf('month'), moment().subtract(1, 'month').endOf('month')]
}
