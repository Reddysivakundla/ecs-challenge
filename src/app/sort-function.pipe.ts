import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'sortFunction'
})
export class SortFunctionPipe implements PipeTransform {

  transform(array: any, field: string): any[] {
    if (!Array.isArray(array)) {
      return;
    }
    if(field == "lowtohigh"){
      array.sort((a: any, b: any) => {
        if (a.average_rating < b.average_rating) {
          return -1;
        } else if (a.average_rating > b.average_rating) {
          return 1;
        } else {
          return 0;
        }
      });
    }
    else if(field == "hightolow"){
      array.sort((a: any, b: any) => {
        if (a.average_rating < b.average_rating) {
          return 1;
        } else if (a.average_rating > b.average_rating) {
          return -1;
        } else {
          return 0;
        }
      });
    }
    
    return array;
  }

}
