import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'paragraph'
})
export class Paragraph implements PipeTransform {

  transform(value: any, fraction?: any): any {

    if (value) {
      value = value.charAt(0).toUpperCase() + value.slice(1).toLowerCase();
      
    }
    
    return `${value}`;
  }

}
