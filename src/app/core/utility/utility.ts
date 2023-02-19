export function GetAddress(data: any, isLong: boolean = false, isDetailed: boolean = false,showPlotName: boolean= false): string {

    let address = "";
    const FILTER = "NA";

    if (!data) return "";

    if (isLong && showPlotName && data.plot_name && data.plot_name != FILTER) {
        address += (isDetailed ? 'Building # ' : '') + (data.plot_name + ", ");
    }

    if (isLong && data.plot_no && data.plot_no != FILTER) {
        address += (isDetailed ? 'Plot # ' : '') + (data.plot_no + ", ");
    }

    if (isLong && data.road_no && data.road_no != FILTER) {
        address += (isDetailed ? 'Road No - ' : '') + (data.road_no + ", ");
    }

    if (isLong && data.block && data.block != FILTER) {
        address += (isDetailed ? 'Block# ' : '') + (data.block + ", ");
    } 

    // if (!isLong && data.area_code && data.area_code != FILTER) address += data.area_code + ", ";

    if (data.area && data.area != FILTER) address += data.area + ", ";

   

    if (data.district && data.district != FILTER ) {
        address += data.district;
        if (data.postcode) {
            address += "-" + data.postcode + ', ';
        } else {
            address += ', ';
        }
    } 

    if (!data.district && data.postcode && data.postcode != FILTER) address += data.postcode + ", ";

    if (data.country && data.country != FILTER) address += data.country + ", ";

    address = address.trim();

    if (address[address.length-1] == ",") address = address.slice(0, address.length-1);
    return address;
}

export function GetCurrencyValue(value: number | string, isCurrency: boolean = false, isSymbol: boolean = false): string {
    
    let fractionDigit: number = 2;
    let currency: string = ' BDT';
    let symbol: string = '৳';

    let data: any = Number(value) || 0;
    data = data.toFixed(fractionDigit);

    if (isSymbol) {
        data = symbol + data; 
    }
    
    if (isCurrency) {
        data += currency;
    }

    return data;
}

export function GetDataServiceError(error: any = {}): string {

    let message;
    if (error?.error?.errors && typeof error.error.errors == 'object') {
        message = Object.values(error.error.errors)[0];
    }

    return message ? message :  'something went wrong';
}

export function GetBusinessServiceError(error: any = {}): string {

    let message;
    if (error?.error?.message && Array.isArray(error.error.message)) {
        message = Object.values(error.error.message)[0];
    } else {
        message = error.error?.message;
    }

    return message ? message :  'something went wrong';
}

export function GetValidData(data: any): any {
    if (!data?.email) {
        delete data.email;
    }
    return data;
}