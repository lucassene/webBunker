import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'orderbyName'
})
export class OrderbyNamePipe implements PipeTransform {

  transform(array: any[], args: string): any {
    array.sort((a: any, b: any) => {
        if ( a.name.toLowerCase() < b.name.toLowerCase()) {
          return -1;
        } else if (a.name.toLowerCase() > b.name.toLowerCase()) {
          return 1;
        } else {
          return 0;
        }
    });
    return array;
  }

}
