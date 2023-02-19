import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'itsmCurrency'
})
export class ItsmNumberPipe implements PipeTransform {

  public currencyCode: string = "BDT";
  public fractionDigit: number = 2;
  public local: string = 'bn-BD';

  transform(value: any, fraction?: any): any {

    if (value) {

      if (fraction && Number(fraction)) {
        this.fractionDigit = Number(fraction);
      }

      const formatter = new Intl.NumberFormat(this.local, {
        style: 'currency',
        currency: this.currencyCode,
        minimumFractionDigits: this.fractionDigit
      });
      
      

      let currencyValue = Number(value);
      if (currencyValue) {
        let temp = formatter.format(currencyValue);
        temp = temp.slice(0, temp.length - 1);
        return this._toEn(temp);
      } else {
        return `${Number(0).toFixed(this.fractionDigit)}`;
      }
    }
    
    return `${Number(0).toFixed(this.fractionDigit)}`;
  }

  private _toEn(value) {
      return value.replace(/[০-৯]/g, d => "০১২৩৪৫৬৭৮৯".indexOf(d));
  }

}
