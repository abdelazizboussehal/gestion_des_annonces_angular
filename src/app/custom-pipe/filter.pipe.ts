import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'filter',
  pure : false // update when change data
})
export class FilterPipe implements PipeTransform {

  transform(value: any, filterInputValue: string, filterAttName: any): any {
    if (value.lenth === 0 || filterInputValue === '')
    {
      return value;
    }else
    {
      const resulat = [];
      for (const elm of value){
        if (elm[filterAttName] === filterInputValue)
        {
          resulat.push(elm);
        }
    }
      return resulat;
    }
  }

}
